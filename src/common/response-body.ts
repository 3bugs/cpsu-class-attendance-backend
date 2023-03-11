export type ResponseBody = {
  status: 'ok' | 'error';
  message: string | null;
  data: any;
}