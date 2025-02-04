import { AdapterResult } from "../../types/adapters";
import adapter from "./tornado";
const chain: string = "ethereum";

export const governance = adapter(
  "0x179f48C78f57A3A78f0608cC9197B8972921d1D2",
  chain,
  {
    beforeCliff: 1615852800,
    afterCliff: 1616371200,
    beforeStep: 1641859200,
    afterStep: 1642032000,
  },
);
const investorTimestamps = {
  beforeCliff: 1639094400,
  afterCliff: 1639440000,
  beforeStep: 1641859200,
  afterStep: 1642118400,
};
export const teamAndInvestors: Promise<AdapterResult[][]> = Promise.all([
  adapter(
    "0x5f48c2a71b2cc96e3f0ccae4e39318ff0dc375b2",
    chain,
    investorTimestamps,
  ),
  adapter(
    "0x00d5ec4cdf59374b2a47e842b799027356eac02b",
    chain,
    investorTimestamps,
  ),
  adapter(
    "0x77c08248c93ab53ff734ac555c932f8b9089d4c9",
    chain,
    investorTimestamps,
  ),
  adapter(
    "0xc3877028655ebe90b9447dd33de391c955ead267",
    chain,
    investorTimestamps,
  ),
  adapter(
    "0xb43432ec23e228fb7cb0fa52968949458b509f4f",
    chain,
    investorTimestamps,
  ),
]);
