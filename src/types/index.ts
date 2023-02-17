export type Category = {
  _id: string;
  name: string;
  checked?: boolean;
};

export type Product = {
  name: string;
  shortDescription: string;
  id: string;
  images: {
    alt: string;
    asset: {
      url: string;
    };
  }[];
  category: {
    _id: string;
    name: string;
  };
};
