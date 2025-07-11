export type EventType = {
  id: string;
  tidFra: string;
  beskrivelse: string;
  foredragsholder: string;
  rom: string;
  tittel: string;
  varighet: number;
  kategoriList: string[];
};

export type EventFieldRecordType = {
  tid_fra: string;
  beskrivelse: string;
  foredragsholder: string;
  tittel: string;
  varighet: number;
  rom: string;
  kategorier: string[];
};

export type AirtableRecordType = {
  fields: EventFieldRecordType;
};

export type AirtableResponseType = {
  records: AirtableRecordType[];
};

export type FetchDataType = {
  data: AirtableRecordType[] | undefined;
  loading: boolean;
  error: boolean;
};
