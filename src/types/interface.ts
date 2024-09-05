export interface Rocket {
    id: string;
    name: string;
    description: string;
    flickr_images: string[];
    wikipedia: string;
  }

  export interface history {
    title: string;
    event_date_utc: string;
    event_date_unix: number;
    details: string;
    links?: {
      article?: string;
    };
  }

  export interface Launch {
    id: string;
    name: string;
    date_utc: string;
    success: boolean;
    details: string;
    links: {
      article: string;
      wikipedia?: string;
      webcast?: string;
    };
  }