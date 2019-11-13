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
