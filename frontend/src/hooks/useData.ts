import { useEffect, useState } from "react";
const TOKEN = import.meta.env.VITE_AIRTABLE_API_KEY;
const BASE = import.meta.env.VITE_AIRTABLE_BASE_ID;
import {
  AirtableRecordType,
  AirtableResponseType,
  FetchDataType,
} from "../types";

export default function useData(
  table: string,
  base: string = BASE
): FetchDataType {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState<undefined | AirtableRecordType[]>(undefined);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://api.airtable.com/v0/${base}/${table}`,
          {
            headers: {
              Authorization: `Bearer ${TOKEN}`,
            },
          }
        );
        const result: AirtableResponseType = await response.json();
        setData(result.records);
        setLoading(false);
      } catch (error) {
        // Go to 500
        console.error(error);
        setError(true);
      }
    };
    getData();
  }, []);
  return { data, loading, error };
}
