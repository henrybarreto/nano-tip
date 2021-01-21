export function from_raw_to_nano(raw) {
  const nano = 10**30;
  return (
    (raw/nano)
  );
}
