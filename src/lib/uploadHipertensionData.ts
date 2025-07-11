import { supabase } from './supabase';
import fs from 'fs';
import { parse } from 'csv-parse';
import path from 'path';

async function uploadHipertensionData() {
    const records: any[] = [];
    const csvFilePath = path.resolve(process.cwd(), 'hipertension_output_100.csv');
    
    // Leer el archivo CSV
    const parser = fs
        .createReadStream(csvFilePath)
        .pipe(parse({
            columns: true,
            skip_empty_lines: true
        }));

    // Procesar cada línea del CSV
    for await (const record of parser) {
        records.push({
            timestamp: new Date(record.timestamp),
            hr_bpm: parseFloat(record.HR_bpm),
            rr_ms: parseInt(record.RR_ms),
            a_pico_v: parseFloat(record.A_pico_V),
            sqi: parseFloat(record.SQI),
            lat: parseFloat(record.lat),
            lon: parseFloat(record.lon),
            hr_status: record.HR_status,
            hr_alert: record.HR_alert === 'True',
            sqi_status: record.SQI_status,
            sqi_alert: record.SQI_alert === 'True',
            a_status: record.A_status,
            a_alert: record.A_alert === 'True',
            alert: record.ALERT === 'True'
        });
    }

    console.log(`Total records to upload: ${records.length}`);

    // Subir los datos a Supabase en lotes de 50
    const batchSize = 50;
    for (let i = 0; i < records.length; i += batchSize) {
        const batch = records.slice(i, i + batchSize);
        const { error } = await supabase
            .from('hipertension')
            .insert(batch);

        if (error) {
            console.error(`Error uploading batch ${i/batchSize + 1}:`, error);
            console.error('Failed batch:', batch);
        } else {
            console.log(`Uploaded batch ${i/batchSize + 1} successfully (${i + batch.length}/${records.length} records)`);
        }
    }
}

// Ejecutar la función
uploadHipertensionData()
    .then(() => console.log('Upload completed successfully'))
    .catch(error => console.error('Upload failed:', error)); 