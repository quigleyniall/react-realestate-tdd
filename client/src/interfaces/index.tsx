export interface IListing {
  img_url: string;
  price_formatted: string;
  lister_url: string;
  title: string;
  bedroom_number: number | string;
  bathroom_number: number | string;
  lister_name: string;
}

export interface Property {
  image: string;
  desc: string;
  onPress: () => void;
  title: string;
  buttonText: string;
}

export interface ListingResponse {
  bathroom_number: string | number;
  bedroom_number: number;
  car_spaces: string | number;
  commission: string | number;
  construction_year: string | number;
  datasource_name: string;
  img_height: string | number;
  img_url: string;
  img_width: string | number;
  keywords: string;
  latitude: string | number;
  lister_name: string;
  lister_url: string;
  listing_type: string;
  location_accuracy: string | number;
  longitude: string | number;
  price: string | number;
  price_currency: string;
  price_formatted: string;
  price_high: string | number;
  price_low: string | number;
  price_type: string;
  property_type: string;
  size: string | number;
  size_type: string;
  summary: string;
  thumb_height: string | number;
  thumb_url: string;
  thumb_width: string | number;
  title: string;
  updated_in_days: string | number;
  updated_in_days_formatted: string;
}
