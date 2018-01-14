/*************************************************************************
Auto Generated interface and class. Provide input json value and you will
get interface and implementation class. Nice!!
https://jvilk.com/MakeTypes/
* ************************************************************************/

export interface StockQuotes {
  symbol: string;
  companyName: string;
  primaryExchange: string;
  sector: string;
  calculationPrice: string;
  open: number;
  openTime: number;
  close: number;
  closeTime: number;
  high: number;
  low: number;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume: number;
  //iexRealtimePrice: number;
  //iexRealtimeSize: number;
  //iexLastUpdated: number;
  delayedPrice: number;
  delayedPriceTime: number;
  previousClose: number;
  change: number;
  changePercent: number;
  //iexMarketPercent: number;
  //iexVolume: number;
  avgTotalVolume: number;
  //iexBidPrice: number;
  //iexBidSize: number;
  //iexAskPrice: number;
  //iexAskSize: number;
  marketCap: number;
  peRatio: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
}

let obj: any = null;
export class StockQuotesProxy {
  public readonly symbol: string;
  public readonly companyName: string;
  public readonly primaryExchange: string;
  public readonly sector: string;
  public readonly calculationPrice: string;
  public readonly open: number;
  public readonly openTime: number;
  public readonly close: number;
  public readonly closeTime: number;
  public readonly high: number;
  public readonly low: number;
  public readonly latestPrice: number;
  public readonly latestSource: string;
  public readonly latestTime: string;
  public readonly latestUpdate: number;
  public readonly latestVolume: number;
  //public readonly iexRealtimePrice: number;
  //public readonly iexRealtimeSize: number;
  //public readonly iexLastUpdated: number;
  public readonly delayedPrice: number;
  public readonly delayedPriceTime: number;
  public readonly previousClose: number;
  public readonly change: number;
  public readonly changePercent: number;
  //public readonly iexMarketPercent: number;
  //public readonly iexVolume: number;
  public readonly avgTotalVolume: number;
  //public readonly iexBidPrice: number;
  //public readonly iexBidSize: number;
  //public readonly iexAskPrice: number;
  //public readonly iexAskSize: number;
  public readonly marketCap: number;
  public readonly peRatio: number;
  public readonly week52High: number;
  public readonly week52Low: number;
  public readonly ytdChange: number;
  public static Parse(d: string): StockQuotesProxy {
    return StockQuotesProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): StockQuotesProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof (d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.symbol, false, field + ".symbol");
    checkString(d.companyName, false, field + ".companyName");
    checkString(d.primaryExchange, false, field + ".primaryExchange");
    checkString(d.sector, false, field + ".sector");
    checkString(d.calculationPrice, false, field + ".calculationPrice");
    checkNumber(d.open, false, field + ".open");
    checkNumber(d.openTime, false, field + ".openTime");
    checkNumber(d.close, false, field + ".close");
    checkNumber(d.closeTime, false, field + ".closeTime");
    checkNumber(d.high, false, field + ".high");
    checkNumber(d.low, false, field + ".low");
    checkNumber(d.latestPrice, false, field + ".latestPrice");
    checkString(d.latestSource, false, field + ".latestSource");
    checkString(d.latestTime, false, field + ".latestTime");
    checkNumber(d.latestUpdate, false, field + ".latestUpdate");
    checkNumber(d.latestVolume, false, field + ".latestVolume");
    //checkNumber(d.iexRealtimePrice, false, field + ".iexRealtimePrice");
    //checkNumber(d.iexRealtimeSize, false, field + ".iexRealtimeSize");
    //checkNumber(d.iexLastUpdated, false, field + ".iexLastUpdated");
    checkNumber(d.delayedPrice, false, field + ".delayedPrice");
    checkNumber(d.delayedPriceTime, false, field + ".delayedPriceTime");
    checkNumber(d.previousClose, false, field + ".previousClose");
    checkNumber(d.change, false, field + ".change");
    checkNumber(d.changePercent, false, field + ".changePercent");
    //checkNumber(d.iexMarketPercent, false, field + ".iexMarketPercent");
    //checkNumber(d.iexVolume, false, field + ".iexVolume");
    checkNumber(d.avgTotalVolume, false, field + ".avgTotalVolume");
    //checkNumber(d.iexBidPrice, false, field + ".iexBidPrice");
    //checkNumber(d.iexBidSize, false, field + ".iexBidSize");
    //checkNumber(d.iexAskPrice, false, field + ".iexAskPrice");
    //checkNumber(d.iexAskSize, false, field + ".iexAskSize");
    checkNumber(d.marketCap, false, field + ".marketCap");
    checkNumber(d.peRatio, false, field + ".peRatio");
    checkNumber(d.week52High, false, field + ".week52High");
    checkNumber(d.week52Low, false, field + ".week52Low");
    checkNumber(d.ytdChange, false, field + ".ytdChange");
    return new StockQuotesProxy(d);
  }

  private constructor(d: any) {
    this.symbol = d.symbol;
    this.companyName = d.companyName;
    this.primaryExchange = d.primaryExchange;
    this.sector = d.sector;
    this.calculationPrice = d.calculationPrice;
    this.open = d.open;
    this.openTime = d.openTime;
    this.close = d.close;
    this.closeTime = d.closeTime;
    this.high = d.high;
    this.low = d.low;
    this.latestPrice = d.latestPrice;
    this.latestSource = d.latestSource;
    this.latestTime = d.latestTime;
    this.latestUpdate = d.latestUpdate;
    this.latestVolume = d.latestVolume;
    //this.iexRealtimePrice = d.iexRealtimePrice;
    //this.iexRealtimeSize = d.iexRealtimeSize;
    //this.iexLastUpdated = d.iexLastUpdated;
    this.delayedPrice = d.delayedPrice;
    this.delayedPriceTime = d.delayedPriceTime;
    this.previousClose = d.previousClose;
    this.change = d.change;
    this.changePercent = d.changePercent;
    //this.iexMarketPercent = d.iexMarketPercent;
    //this.iexVolume = d.iexVolume;
    this.avgTotalVolume = d.avgTotalVolume;
    //this.iexBidPrice = d.iexBidPrice;
    //this.iexBidSize = d.iexBidSize;
    //this.iexAskPrice = d.iexAskPrice;
    //this.iexAskSize = d.iexAskSize;
    this.marketCap = d.marketCap;
    this.peRatio = d.peRatio;
    this.week52High = d.week52High;
    this.week52Low = d.week52Low;
    this.ytdChange = d.ytdChange;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkNumber(d: any, nullable: boolean, field: string): void {
  if (typeof (d) !== 'number' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "number", nullable);
  }
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof (d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
