export function normalizeId(record: any | any[]): any {
  if (Array.isArray(record)) {
    return record.map(normalizeId);
  } else if (typeof record === "object") {
    console.log("record ", record)
    if ("_id" in record) {
      const { _id: id, ...attrs } = record;
      return { id, ...attrs };
    }
    return { ...record };
  }
  return record;
}
