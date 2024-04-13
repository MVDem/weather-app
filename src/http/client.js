import axiosInstance from '.';

export async function searchCity(searchStr) {
  return [
    {
      Version: 1,
      Key: '213225',
      Type: 'City',
      Rank: 30,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
      },
      AdministrativeArea: {
        ID: 'JM',
        LocalizedName: 'Jerusalem',
      },
    },
    {
      Version: 1,
      Key: '128752',
      Type: 'City',
      Rank: 65,
      LocalizedName: 'Jerusalen',
      Country: {
        ID: 'SV',
        LocalizedName: 'El Salvador',
      },
      AdministrativeArea: {
        ID: 'PA',
        LocalizedName: 'La Paz',
      },
    },
    {
      Version: 1,
      Key: '32864',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Jerusalen',
      Country: {
        ID: 'BO',
        LocalizedName: 'Bolivia',
      },
      AdministrativeArea: {
        ID: 'B',
        LocalizedName: 'El Beni',
      },
    },
    {
      Version: 1,
      Key: '221483',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'JM',
        LocalizedName: 'Jamaica',
      },
      AdministrativeArea: {
        ID: '10',
        LocalizedName: 'Westmoreland',
      },
    },
    {
      Version: 1,
      Key: '2305887',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalém',
      Country: {
        ID: 'BR',
        LocalizedName: 'Brazil',
      },
      AdministrativeArea: {
        ID: 'MG',
        LocalizedName: 'Minas Gerais',
      },
    },
    {
      Version: 1,
      Key: '2310187',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalém',
      Country: {
        ID: 'BR',
        LocalizedName: 'Brazil',
      },
      AdministrativeArea: {
        ID: 'MT',
        LocalizedName: 'Mato Grosso',
      },
    },
    {
      Version: 1,
      Key: '1376675',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'CZ',
        LocalizedName: 'Czechia',
      },
      AdministrativeArea: {
        ID: '20',
        LocalizedName: 'Central Bohemian',
      },
    },
    {
      Version: 1,
      Key: '3537004',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'IE',
        LocalizedName: 'Ireland',
      },
      AdministrativeArea: {
        ID: 'KE',
        LocalizedName: 'County Kildare',
      },
    },
    {
      Version: 1,
      Key: '1062987',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'MX',
        LocalizedName: 'Mexico',
      },
      AdministrativeArea: {
        ID: 'DUR',
        LocalizedName: 'Durango',
      },
    },
    {
      Version: 1,
      Key: '2115414',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
      },
      AdministrativeArea: {
        ID: 'OH',
        LocalizedName: 'Ohio',
      },
    },
  ];
}

export async function getCityKey(cityNameStr) {
  return; // Jerusalem. You need to locate correct city and use a "Key" value;
  [
    {
      Version: 1,
      Key: '213225',
      Type: 'City',
      Rank: 30,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East',
      },
      Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel',
      },
      AdministrativeArea: {
        ID: 'JM',
        LocalizedName: 'Jerusalem',
        EnglishName: 'Jerusalem',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL',
      },
      TimeZone: {
        Code: 'IDT',
        Name: 'Asia/Jerusalem',
        GmtOffset: 3.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-10-26T23:00:00Z',
      },
      GeoPosition: {
        Latitude: 31.774,
        Longitude: 35.225,
        Elevation: {
          Metric: {
            Value: 804.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 2637.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
      ],
    },
    {
      Version: 1,
      Key: '221483',
      Type: 'City',
      Rank: 75,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'CAC',
        LocalizedName: 'Central America',
        EnglishName: 'Central America',
      },
      Country: {
        ID: 'JM',
        LocalizedName: 'Jamaica',
        EnglishName: 'Jamaica',
      },
      AdministrativeArea: {
        ID: '10',
        LocalizedName: 'Westmoreland',
        EnglishName: 'Westmoreland',
        Level: 1,
        LocalizedType: 'Parish',
        EnglishType: 'Parish',
        CountryID: 'JM',
      },
      TimeZone: {
        Code: 'EST',
        Name: 'America/Jamaica',
        GmtOffset: -5.0,
        IsDaylightSaving: false,
        NextOffsetChange: null,
      },
      GeoPosition: {
        Latitude: 18.317,
        Longitude: -78.233,
        Elevation: {
          Metric: {
            Value: 188.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 616.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'FutureRadar', 'MinuteCast', 'Radar'],
    },
    {
      Version: 1,
      Key: '3496636',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'OCN',
        LocalizedName: 'Oceania',
        EnglishName: 'Oceania',
      },
      Country: {
        ID: 'AU',
        LocalizedName: 'Australia',
        EnglishName: 'Australia',
      },
      AdministrativeArea: {
        ID: 'SA',
        LocalizedName: 'South Australia',
        EnglishName: 'South Australia',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'AU',
      },
      TimeZone: {
        Code: 'ACST',
        Name: 'Australia/Adelaide',
        GmtOffset: 9.5,
        IsDaylightSaving: false,
        NextOffsetChange: '2024-10-05T16:30:00Z',
      },
      GeoPosition: {
        Latitude: -33.976,
        Longitude: 137.717,
        Elevation: {
          Metric: {
            Value: 55.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 180.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Copper Coast',
          EnglishName: 'Copper Coast',
        },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'Alerts', 'FutureRadar', 'MinuteCast', 'Radar'],
    },
    {
      Version: 1,
      Key: '1376675',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'EUR',
        LocalizedName: 'Europe',
        EnglishName: 'Europe',
      },
      Country: {
        ID: 'CZ',
        LocalizedName: 'Czechia',
        EnglishName: 'Czechia',
      },
      AdministrativeArea: {
        ID: '20',
        LocalizedName: 'Central Bohemian',
        EnglishName: 'Central Bohemian',
        Level: 1,
        LocalizedType: 'Region',
        EnglishType: 'Region',
        CountryID: 'CZ',
      },
      TimeZone: {
        Code: 'CEST',
        Name: 'Europe/Prague',
        GmtOffset: 2.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-10-27T01:00:00Z',
      },
      GeoPosition: {
        Latitude: 49.662,
        Longitude: 14.037,
        Elevation: {
          Metric: {
            Value: 558.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 1831.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Příbram',
          EnglishName: 'Příbram',
        },
        {
          Level: 3,
          LocalizedName: 'Háje',
          EnglishName: 'Háje',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '3537004',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'EUR',
        LocalizedName: 'Europe',
        EnglishName: 'Europe',
      },
      Country: {
        ID: 'IE',
        LocalizedName: 'Ireland',
        EnglishName: 'Ireland',
      },
      AdministrativeArea: {
        ID: 'KE',
        LocalizedName: 'County Kildare',
        EnglishName: 'County Kildare',
        Level: 1,
        LocalizedType: 'County',
        EnglishType: 'County',
        CountryID: 'IE',
      },
      TimeZone: {
        Code: 'IST',
        Name: 'Europe/Dublin',
        GmtOffset: 1.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-10-27T01:00:00Z',
      },
      GeoPosition: {
        Latitude: 52.891,
        Longitude: -6.935,
        Elevation: {
          Metric: {
            Value: 50.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 164.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '1062987',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'MX',
        LocalizedName: 'Mexico',
        EnglishName: 'Mexico',
      },
      AdministrativeArea: {
        ID: 'DUR',
        LocalizedName: 'Durango',
        EnglishName: 'Durango',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'MX',
      },
      TimeZone: {
        Code: 'CST',
        Name: 'America/Monterrey',
        GmtOffset: -6.0,
        IsDaylightSaving: false,
        NextOffsetChange: null,
      },
      GeoPosition: {
        Latitude: 25.809,
        Longitude: -103.358,
        Elevation: {
          Metric: {
            Value: 1091.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 3578.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Gómez Palacio',
          EnglishName: 'Gómez Palacio',
        },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'FutureRadar', 'MinuteCast', 'Radar'],
    },
    {
      Version: 1,
      Key: '3429142',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'ASI',
        LocalizedName: 'Asia',
        EnglishName: 'Asia',
      },
      Country: {
        ID: 'PH',
        LocalizedName: 'Philippines',
        EnglishName: 'Philippines',
      },
      AdministrativeArea: {
        ID: 'NEC',
        LocalizedName: 'Negros Occidental',
        EnglishName: 'Negros Occidental',
        Level: 1,
        LocalizedType: 'Province',
        EnglishType: 'Province',
        CountryID: 'PH',
      },
      TimeZone: {
        Code: 'PHT',
        Name: 'Asia/Manila',
        GmtOffset: 8.0,
        IsDaylightSaving: false,
        NextOffsetChange: null,
      },
      GeoPosition: {
        Latitude: 10.888,
        Longitude: 123.317,
        Elevation: {
          Metric: {
            Value: 94.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 310.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      ParentCity: {
        Key: '264982',
        LocalizedName: 'Cadiz City',
        EnglishName: 'Cadiz City',
      },
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Cadiz City',
          EnglishName: 'Cadiz City',
        },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'Alerts', 'FutureRadar', 'MinuteCast'],
    },
    {
      Version: 1,
      Key: '2115414',
      Type: 'City',
      Rank: 85,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '43747',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'OH',
        LocalizedName: 'Ohio',
        EnglishName: 'Ohio',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 39.852,
        Longitude: -81.092,
        Elevation: {
          Metric: {
            Value: 365.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 1197.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Monroe',
          EnglishName: 'Monroe',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2622706',
      Type: 'City',
      Rank: 285,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '14418',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'NY',
        LocalizedName: 'New York',
        EnglishName: 'New York',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 42.609,
        Longitude: -77.155,
        Elevation: {
          Metric: {
            Value: 225.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 738.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Yates',
          EnglishName: 'Yates',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2186669',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '05443',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'VT',
        LocalizedName: 'Vermont',
        EnglishName: 'Vermont',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 44.17,
        Longitude: -72.97,
        Elevation: {
          Metric: {
            Value: 462.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 1515.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Addison',
          EnglishName: 'Addison',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2186668',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '05767',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'VT',
        LocalizedName: 'Vermont',
        EnglishName: 'Vermont',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 43.838,
        Longitude: -72.774,
        Elevation: {
          Metric: {
            Value: 548.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 1797.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Windsor',
          EnglishName: 'Windsor',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2197645',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '84646',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'UT',
        LocalizedName: 'Utah',
        EnglishName: 'Utah',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'MDT',
        Name: 'America/Denver',
        GmtOffset: -6.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T08:00:00Z',
      },
      GeoPosition: {
        Latitude: 39.564,
        Longitude: -111.658,
        Elevation: {
          Metric: {
            Value: 1830.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 6005.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Sanpete',
          EnglishName: 'Sanpete',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2202899',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '37144',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'TN',
        LocalizedName: 'Tennessee',
        EnglishName: 'Tennessee',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'CDT',
        Name: 'America/Chicago',
        GmtOffset: -5.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T07:00:00Z',
      },
      GeoPosition: {
        Latitude: 35.243,
        Longitude: -86.784,
        Elevation: {
          Metric: {
            Value: 249.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 816.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Lincoln',
          EnglishName: 'Lincoln',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2099014',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '02879',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'RI',
        LocalizedName: 'Rhode Island',
        EnglishName: 'Rhode Island',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 41.377,
        Longitude: -71.518,
        Elevation: {
          Metric: {
            Value: 1.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 3.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Washington',
          EnglishName: 'Washington',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
        'TidalForecast',
      ],
    },
    {
      Version: 1,
      Key: '2214780',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '45202',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'OH',
        LocalizedName: 'Ohio',
        EnglishName: 'Ohio',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 39.121,
        Longitude: -84.516,
        Elevation: {
          Metric: {
            Value: 250.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 820.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Hamilton',
          EnglishName: 'Hamilton',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2211188',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '48118',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'MI',
        LocalizedName: 'Michigan',
        EnglishName: 'Michigan',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/Detroit',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 42.275,
        Longitude: -83.982,
        Elevation: {
          Metric: {
            Value: 273.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 895.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Washtenaw',
          EnglishName: 'Washtenaw',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2106415',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '21087',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'MD',
        LocalizedName: 'Maryland',
        EnglishName: 'Maryland',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 39.463,
        Longitude: -76.389,
        Elevation: {
          Metric: {
            Value: 57.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 186.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Harford',
          EnglishName: 'Harford',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
        'TidalForecast',
      ],
    },
    {
      Version: 1,
      Key: '2106413',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '21773',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'MD',
        LocalizedName: 'Maryland',
        EnglishName: 'Maryland',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 39.524,
        Longitude: -77.58,
        Elevation: {
          Metric: {
            Value: 291.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 954.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Frederick',
          EnglishName: 'Frederick',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2180903',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '30055',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'GA',
        LocalizedName: 'Georgia',
        EnglishName: 'Georgia',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 33.52,
        Longitude: -83.741,
        Elevation: {
          Metric: {
            Value: 235.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 770.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Newton',
          EnglishName: 'Newton',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2139592',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '30143',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'GA',
        LocalizedName: 'Georgia',
        EnglishName: 'Georgia',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 34.442,
        Longitude: -84.582,
        Elevation: {
          Metric: {
            Value: 377.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 1236.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Pickens',
          EnglishName: 'Pickens',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2152761',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '31568',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'GA',
        LocalizedName: 'Georgia',
        EnglishName: 'Georgia',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 30.978,
        Longitude: -81.846,
        Elevation: {
          Metric: {
            Value: 12.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 39.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Camden',
          EnglishName: 'Camden',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
        'TidalForecast',
      ],
    },
    {
      Version: 1,
      Key: '2112661',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '72080',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'AR',
        LocalizedName: 'Arkansas',
        EnglishName: 'Arkansas',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'CDT',
        Name: 'America/Chicago',
        GmtOffset: -5.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T07:00:00Z',
      },
      GeoPosition: {
        Latitude: 35.405,
        Longitude: -92.817,
        Elevation: {
          Metric: {
            Value: 223.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 731.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Conway',
          EnglishName: 'Conway',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2255026',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '35643',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'AL',
        LocalizedName: 'Alabama',
        EnglishName: 'Alabama',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'CDT',
        Name: 'America/Chicago',
        GmtOffset: -5.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T07:00:00Z',
      },
      GeoPosition: {
        Latitude: 34.705,
        Longitude: -87.227,
        Elevation: {
          Metric: {
            Value: 185.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 606.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Lawrence',
          EnglishName: 'Lawrence',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2090509',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '35555',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'AL',
        LocalizedName: 'Alabama',
        EnglishName: 'Alabama',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'CDT',
        Name: 'America/Chicago',
        GmtOffset: -5.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T07:00:00Z',
      },
      GeoPosition: {
        Latitude: 33.612,
        Longitude: -87.858,
        Elevation: {
          Metric: {
            Value: 165.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 541.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Fayette',
          EnglishName: 'Fayette',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '2106414',
      Type: 'City',
      Rank: 385,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '20837',
      Region: {
        ID: 'NAM',
        LocalizedName: 'North America',
        EnglishName: 'North America',
      },
      Country: {
        ID: 'US',
        LocalizedName: 'United States',
        EnglishName: 'United States',
      },
      AdministrativeArea: {
        ID: 'MD',
        LocalizedName: 'Maryland',
        EnglishName: 'Maryland',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'US',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/New_York',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 39.159,
        Longitude: -77.406,
        Elevation: {
          Metric: {
            Value: 125.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 410.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Montgomery',
          EnglishName: 'Montgomery',
        },
      ],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyAirQualityForecast',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '1475413',
      Type: 'City',
      Rank: 600,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'SAM',
        LocalizedName: 'South America',
        EnglishName: 'South America',
      },
      Country: {
        ID: 'PE',
        LocalizedName: 'Peru',
        EnglishName: 'Peru',
      },
      AdministrativeArea: {
        ID: 'LOR',
        LocalizedName: 'Loreto',
        EnglishName: 'Loreto',
        Level: 1,
        LocalizedType: 'Region',
        EnglishType: 'Region',
        CountryID: 'PE',
      },
      TimeZone: {
        Code: 'PET',
        Name: 'America/Lima',
        GmtOffset: -5.0,
        IsDaylightSaving: false,
        NextOffsetChange: null,
      },
      GeoPosition: {
        Latitude: -3.45,
        Longitude: -73.117,
        Elevation: {
          Metric: {
            Value: 111.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 364.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'FutureRadar', 'MinuteCast', 'Radar'],
    },
    {
      Version: 1,
      Key: '960749',
      Type: 'City',
      Rank: 600,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'EUR',
        LocalizedName: 'Europe',
        EnglishName: 'Europe',
      },
      Country: {
        ID: 'BE',
        LocalizedName: 'Belgium',
        EnglishName: 'Belgium',
      },
      AdministrativeArea: {
        ID: 'WBR',
        LocalizedName: 'Walloon Brabant',
        EnglishName: 'Walloon Brabant',
        Level: 1,
        LocalizedType: 'Province',
        EnglishType: 'Province',
        CountryID: 'BE',
      },
      TimeZone: {
        Code: 'CEST',
        Name: 'Europe/Brussels',
        GmtOffset: 2.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-10-27T01:00:00Z',
      },
      GeoPosition: {
        Latitude: 50.6,
        Longitude: 4.367,
        Elevation: {
          Metric: {
            Value: 150.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 492.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'DailyPollenForecast',
        'ForecastConfidence',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
    {
      Version: 1,
      Key: '899790',
      Type: 'City',
      Rank: 600,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'AFR',
        LocalizedName: 'Africa',
        EnglishName: 'Africa',
      },
      Country: {
        ID: 'GH',
        LocalizedName: 'Ghana',
        EnglishName: 'Ghana',
      },
      AdministrativeArea: {
        ID: 'CP',
        LocalizedName: 'Central',
        EnglishName: 'Central',
        Level: 1,
        LocalizedType: 'Region',
        EnglishType: 'Region',
        CountryID: 'GH',
      },
      TimeZone: {
        Code: 'GMT',
        Name: 'Africa/Accra',
        GmtOffset: 0.0,
        IsDaylightSaving: false,
        NextOffsetChange: null,
      },
      GeoPosition: {
        Latitude: 5.167,
        Longitude: -1.483,
        Elevation: {
          Metric: {
            Value: 76.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 249.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'MinuteCast'],
    },
    {
      Version: 1,
      Key: '1574579',
      Type: 'City',
      Rank: 600,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'CAC',
        LocalizedName: 'Central America',
        EnglishName: 'Central America',
      },
      Country: {
        ID: 'HT',
        LocalizedName: 'Haiti',
        EnglishName: 'Haiti',
      },
      AdministrativeArea: {
        ID: 'SD',
        LocalizedName: 'South',
        EnglishName: 'South',
        Level: 1,
        LocalizedType: 'Department',
        EnglishType: 'Department',
        CountryID: 'HT',
      },
      TimeZone: {
        Code: 'EDT',
        Name: 'America/Port-au-Prince',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: '2024-11-03T06:00:00Z',
      },
      GeoPosition: {
        Latitude: 18.267,
        Longitude: -74.017,
        Elevation: {
          Metric: {
            Value: 400.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 1312.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [
        {
          Level: 2,
          LocalizedName: 'Les Coteaux',
          EnglishName: 'Les Coteaux',
        },
      ],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'FutureRadar', 'MinuteCast', 'Radar'],
    },
    {
      Version: 1,
      Key: '877933',
      Type: 'City',
      Rank: 600,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'AFR',
        LocalizedName: 'Africa',
        EnglishName: 'Africa',
      },
      Country: {
        ID: 'LR',
        LocalizedName: 'Liberia',
        EnglishName: 'Liberia',
      },
      AdministrativeArea: {
        ID: 'GB',
        LocalizedName: 'Grand Bassa',
        EnglishName: 'Grand Bassa',
        Level: 1,
        LocalizedType: 'County',
        EnglishType: 'County',
        CountryID: 'LR',
      },
      TimeZone: {
        Code: 'GMT',
        Name: 'Africa/Monrovia',
        GmtOffset: 0.0,
        IsDaylightSaving: false,
        NextOffsetChange: null,
      },
      GeoPosition: {
        Latitude: 5.75,
        Longitude: -9.75,
        Elevation: {
          Metric: {
            Value: 174.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 570.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'MinuteCast'],
    },
    {
      Version: 1,
      Key: '2052098',
      Type: 'City',
      Rank: 600,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'AFR',
        LocalizedName: 'Africa',
        EnglishName: 'Africa',
      },
      Country: {
        ID: 'NG',
        LocalizedName: 'Nigeria',
        EnglishName: 'Nigeria',
      },
      AdministrativeArea: {
        ID: 'CR',
        LocalizedName: 'Cross River',
        EnglishName: 'Cross River',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'NG',
      },
      TimeZone: {
        Code: 'WAT',
        Name: 'Africa/Lagos',
        GmtOffset: 1.0,
        IsDaylightSaving: false,
        NextOffsetChange: null,
      },
      GeoPosition: {
        Latitude: 6.54,
        Longitude: 8.91,
        Elevation: {
          Metric: {
            Value: 178.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 583.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: ['AirQualityCurrentConditions', 'AirQualityForecasts', 'MinuteCast'],
    },
    {
      Version: 1,
      Key: '1234290',
      Type: 'City',
      Rank: 600,
      LocalizedName: 'Jerusalem',
      EnglishName: 'Jerusalem',
      PrimaryPostalCode: '',
      Region: {
        ID: 'SAM',
        LocalizedName: 'South America',
        EnglishName: 'South America',
      },
      Country: {
        ID: 'VE',
        LocalizedName: 'Venezuela',
        EnglishName: 'Venezuela',
      },
      AdministrativeArea: {
        ID: 'V',
        LocalizedName: 'Zulia',
        EnglishName: 'Zulia',
        Level: 1,
        LocalizedType: 'State',
        EnglishType: 'State',
        CountryID: 'VE',
      },
      TimeZone: {
        Code: 'VET',
        Name: 'America/Caracas',
        GmtOffset: -4.0,
        IsDaylightSaving: true,
        NextOffsetChange: null,
      },
      GeoPosition: {
        Latitude: 10.7,
        Longitude: -71.633,
        Elevation: {
          Metric: {
            Value: 6.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 19.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
      },
      IsAlias: false,
      SupplementalAdminAreas: [],
      DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'FutureRadar',
        'MinuteCast',
        'Radar',
        'TidalForecast',
      ],
    },
  ];
}

export async function getCurrentWeather(cityKeyStr, details = false) {
  if (details)
    return [
      {
        LocalObservationDateTime: '2024-04-12T16:57:00+03:00',
        EpochTime: 1712930220,
        WeatherText: 'Sunny',
        WeatherIcon: 1,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {
            Value: 20.2,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        RealFeelTemperature: {
          Metric: {
            Value: 19.8,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Pleasant',
          },
          Imperial: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
            Phrase: 'Pleasant',
          },
        },
        RealFeelTemperatureShade: {
          Metric: {
            Value: 17.8,
            Unit: 'C',
            UnitType: 17,
            Phrase: 'Pleasant',
          },
          Imperial: {
            Value: 64.0,
            Unit: 'F',
            UnitType: 18,
            Phrase: 'Pleasant',
          },
        },
        RelativeHumidity: 49,
        IndoorRelativeHumidity: 49,
        DewPoint: {
          Metric: {
            Value: 9.3,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 49.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Wind: {
          Direction: {
            Degrees: 293,
            Localized: 'WNW',
            English: 'WNW',
          },
          Speed: {
            Metric: {
              Value: 31.8,
              Unit: 'km/h',
              UnitType: 7,
            },
            Imperial: {
              Value: 19.8,
              Unit: 'mi/h',
              UnitType: 9,
            },
          },
        },
        WindGust: {
          Speed: {
            Metric: {
              Value: 46.3,
              Unit: 'km/h',
              UnitType: 7,
            },
            Imperial: {
              Value: 28.8,
              Unit: 'mi/h',
              UnitType: 9,
            },
          },
        },
        UVIndex: 4,
        UVIndexText: 'Moderate',
        Visibility: {
          Metric: {
            Value: 16.1,
            Unit: 'km',
            UnitType: 6,
          },
          Imperial: {
            Value: 10.0,
            Unit: 'mi',
            UnitType: 2,
          },
        },
        ObstructionsToVisibility: '',
        CloudCover: 1,
        Ceiling: {
          Metric: {
            Value: 9144.0,
            Unit: 'm',
            UnitType: 5,
          },
          Imperial: {
            Value: 30000.0,
            Unit: 'ft',
            UnitType: 0,
          },
        },
        Pressure: {
          Metric: {
            Value: 1016.0,
            Unit: 'mb',
            UnitType: 14,
          },
          Imperial: {
            Value: 30.0,
            Unit: 'inHg',
            UnitType: 12,
          },
        },
        PressureTendency: {
          LocalizedText: 'Steady',
          Code: 'S',
        },
        Past24HourTemperatureDeparture: {
          Metric: {
            Value: 1.8,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 3.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        ApparentTemperature: {
          Metric: {
            Value: 19.4,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 67.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WindChillTemperature: {
          Metric: {
            Value: 20.0,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 68.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbTemperature: {
          Metric: {
            Value: 13.9,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 57.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        WetBulbGlobeTemperature: {
          Metric: {
            Value: 17.6,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 64.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        Precip1hr: {
          Metric: {
            Value: 0.0,
            Unit: 'mm',
            UnitType: 3,
          },
          Imperial: {
            Value: 0.0,
            Unit: 'in',
            UnitType: 1,
          },
        },
        PrecipitationSummary: {
          Precipitation: {
            Metric: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Imperial: {
              Value: 0.0,
              Unit: 'in',
              UnitType: 1,
            },
          },
          PastHour: {
            Metric: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Imperial: {
              Value: 0.0,
              Unit: 'in',
              UnitType: 1,
            },
          },
          Past3Hours: {
            Metric: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Imperial: {
              Value: 0.0,
              Unit: 'in',
              UnitType: 1,
            },
          },
          Past6Hours: {
            Metric: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Imperial: {
              Value: 0.0,
              Unit: 'in',
              UnitType: 1,
            },
          },
          Past9Hours: {
            Metric: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Imperial: {
              Value: 0.0,
              Unit: 'in',
              UnitType: 1,
            },
          },
          Past12Hours: {
            Metric: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Imperial: {
              Value: 0.0,
              Unit: 'in',
              UnitType: 1,
            },
          },
          Past18Hours: {
            Metric: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Imperial: {
              Value: 0.0,
              Unit: 'in',
              UnitType: 1,
            },
          },
          Past24Hours: {
            Metric: {
              Value: 0.0,
              Unit: 'mm',
              UnitType: 3,
            },
            Imperial: {
              Value: 0.0,
              Unit: 'in',
              UnitType: 1,
            },
          },
        },
        TemperatureSummary: {
          Past6HourRange: {
            Minimum: {
              Metric: {
                Value: 17.1,
                Unit: 'C',
                UnitType: 17,
              },
              Imperial: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Maximum: {
              Metric: {
                Value: 20.6,
                Unit: 'C',
                UnitType: 17,
              },
              Imperial: {
                Value: 69.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
          },
          Past12HourRange: {
            Minimum: {
              Metric: {
                Value: 9.7,
                Unit: 'C',
                UnitType: 17,
              },
              Imperial: {
                Value: 50.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Maximum: {
              Metric: {
                Value: 20.6,
                Unit: 'C',
                UnitType: 17,
              },
              Imperial: {
                Value: 69.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
          },
          Past24HourRange: {
            Minimum: {
              Metric: {
                Value: 9.7,
                Unit: 'C',
                UnitType: 17,
              },
              Imperial: {
                Value: 50.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Maximum: {
              Metric: {
                Value: 20.6,
                Unit: 'C',
                UnitType: 17,
              },
              Imperial: {
                Value: 69.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
          },
        },
        MobileLink: 'http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us',
        Link: 'http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us',
      },
    ];
  else
    return [
      // Array of 1 element
      {
        LocalObservationDateTime: '2024-04-11T15:28:00+03:00',
        EpochTime: 1712838480,
        WeatherText: 'Clouds and sun',
        WeatherIcon: 4,
        HasPrecipitation: false,
        PrecipitationType: null,
        IsDayTime: true,
        Temperature: {
          Metric: {
            Value: 18.4,
            Unit: 'C',
            UnitType: 17,
          },
          Imperial: {
            Value: 65.0,
            Unit: 'F',
            UnitType: 18,
          },
        },
        MobileLink: 'http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us',
        Link: 'http://www.accuweather.com/en/il/jerusalem/213225/current-weather/213225?lang=en-us',
      },
    ];
}

export async function get5DayForecast(cityKeyStr, details = false, metric = true) {
  if (details) {
    if (metric)
      return {
        Headline: {
          EffectiveDate: '2024-04-13T20:00:00+03:00',
          EffectiveEpochDate: 1713027600,
          Severity: 7,
          Text: 'Mild Saturday night',
          Category: 'heat',
          EndDate: '2024-04-14T08:00:00+03:00',
          EndEpochDate: 1713070800,
          MobileLink:
            'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
        },
        DailyForecasts: [
          {
            Date: '2024-04-12T07:00:00+03:00',
            EpochDate: 1712894400,
            Sun: {
              Rise: '2024-04-12T06:15:00+03:00',
              EpochRise: 1712891700,
              Set: '2024-04-12T19:09:00+03:00',
              EpochSet: 1712938140,
            },
            Moon: {
              Rise: '2024-04-12T08:35:00+03:00',
              EpochRise: 1712900100,
              Set: '2024-04-12T23:38:00+03:00',
              EpochSet: 1712954280,
              Phase: 'WaxingCrescent',
              Age: 4,
            },
            Temperature: {
              Minimum: {
                Value: 15.5,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 16.1,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Cool',
              },
              Maximum: {
                Value: 26.0,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 16.1,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Cool',
              },
              Maximum: {
                Value: 21.4,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 11.0,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 1.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Mostly sunny',
              LongPhrase: 'Mostly sunny',
              PrecipitationProbability: 1,
              ThunderstormProbability: 0,
              RainProbability: 1,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 318,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 25.9,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 328,
                  Localized: 'NNW',
                  English: 'NNW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 10,
              Evapotranspiration: {
                Value: 4.3,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 7945.7,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 55,
                Maximum: 82,
                Average: 64,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 15.9,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 17.4,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 17.1,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 18.1,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 20.7,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 19.9,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy',
              LongPhrase: 'Mainly clear early, then areas of low clouds forming',
              PrecipitationProbability: 1,
              ThunderstormProbability: 0,
              RainProbability: 1,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 7.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 30,
                  Localized: 'NNE',
                  English: 'NNE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 18.5,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 359,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 54,
              Evapotranspiration: {
                Value: 0.3,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 75.0,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 69,
                Maximum: 93,
                Average: 80,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 15.0,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 17.2,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 16.2,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 16.2,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 19.6,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 18.0,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
          },
          {
            Date: '2024-04-13T07:00:00+03:00',
            EpochDate: 1712980800,
            Sun: {
              Rise: '2024-04-13T06:14:00+03:00',
              EpochRise: 1712978040,
              Set: '2024-04-13T19:09:00+03:00',
              EpochSet: 1713024540,
            },
            Moon: {
              Rise: '2024-04-13T09:27:00+03:00',
              EpochRise: 1712989620,
              Set: '2024-04-14T00:39:00+03:00',
              EpochSet: 1713044340,
              Phase: 'WaxingCrescent',
              Age: 5,
            },
            Temperature: {
              Minimum: {
                Value: 17.2,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 17.2,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 26.1,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 17.2,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 21.5,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 9.9,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 2.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Mostly sunny',
              LongPhrase: 'Mostly sunny',
              PrecipitationProbability: 2,
              ThunderstormProbability: 0,
              RainProbability: 2,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 267,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 25.9,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 311,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 19,
              Evapotranspiration: {
                Value: 4.1,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 7978.5,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 55,
                Maximum: 79,
                Average: 64,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 16.4,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 17.7,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 17.4,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 18.7,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 20.9,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 20.2,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Night: {
              Icon: 38,
              IconPhrase: 'Mostly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Mostly cloudy and mild',
              LongPhrase: 'Mostly cloudy and mild',
              PrecipitationProbability: 3,
              ThunderstormProbability: 0,
              RainProbability: 3,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 7.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 279,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 18.5,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 316,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 53,
              Evapotranspiration: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 42.0,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 72,
                Maximum: 91,
                Average: 81,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 16.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 17.9,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 17.2,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 17.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 20.4,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 19.0,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
          },
          {
            Date: '2024-04-14T07:00:00+03:00',
            EpochDate: 1713067200,
            Sun: {
              Rise: '2024-04-14T06:13:00+03:00',
              EpochRise: 1713064380,
              Set: '2024-04-14T19:10:00+03:00',
              EpochSet: 1713111000,
            },
            Moon: {
              Rise: '2024-04-14T10:24:00+03:00',
              EpochRise: 1713079440,
              Set: '2024-04-15T01:33:00+03:00',
              EpochSet: 1713133980,
              Phase: 'WaxingCrescent',
              Age: 6,
            },
            Temperature: {
              Minimum: {
                Value: 18.3,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 17.6,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 26.0,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 17.6,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 21.5,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 8.8,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 3.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Partly sunny',
              LongPhrase: 'Partly sunny',
              PrecipitationProbability: 2,
              ThunderstormProbability: 0,
              RainProbability: 2,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 14.8,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 259,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 31.5,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 276,
                  Localized: 'W',
                  English: 'W',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 32,
              Evapotranspiration: {
                Value: 3.8,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 7687.6,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 61,
                Maximum: 83,
                Average: 68,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 17.1,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 18.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 18.1,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 18.8,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 21.3,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 20.6,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy and mild',
              LongPhrase: 'Partly cloudy and mild',
              PrecipitationProbability: 5,
              ThunderstormProbability: 0,
              RainProbability: 5,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 207,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 18.5,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 158,
                  Localized: 'SSE',
                  English: 'SSE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 47,
              Evapotranspiration: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 79.4,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 77,
                Maximum: 89,
                Average: 84,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 17.4,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 18.2,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 17.8,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 18.9,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 20.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 19.7,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
          },
          {
            Date: '2024-04-15T07:00:00+03:00',
            EpochDate: 1713153600,
            Sun: {
              Rise: '2024-04-15T06:12:00+03:00',
              EpochRise: 1713150720,
              Set: '2024-04-15T19:11:00+03:00',
              EpochSet: 1713197460,
            },
            Moon: {
              Rise: '2024-04-15T11:24:00+03:00',
              EpochRise: 1713169440,
              Set: '2024-04-16T02:18:00+03:00',
              EpochSet: 1713223080,
              Phase: 'First',
              Age: 7,
            },
            Temperature: {
              Minimum: {
                Value: 17.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 17.4,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 26.3,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 17.4,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 21.9,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 9.5,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 3.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Sunshine and a few clouds',
              LongPhrase: 'Sunshine and a few clouds',
              PrecipitationProbability: 25,
              ThunderstormProbability: 0,
              RainProbability: 25,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 14.8,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 285,
                  Localized: 'WNW',
                  English: 'WNW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 31.5,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 319,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 24,
              Evapotranspiration: {
                Value: 3.8,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 7741.5,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 59,
                Maximum: 86,
                Average: 68,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 17.7,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 18.6,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 18.3,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 19.6,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 21.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 20.8,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy and mild',
              LongPhrase: 'Partly cloudy and mild',
              PrecipitationProbability: 0,
              ThunderstormProbability: 0,
              RainProbability: 0,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 51,
                  Localized: 'NE',
                  English: 'NE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 20.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 12,
                  Localized: 'NNE',
                  English: 'NNE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 54,
              Evapotranspiration: {
                Value: 0.3,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 84.3,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 72,
                Maximum: 89,
                Average: 82,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 16.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 18.2,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 17.4,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 17.4,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 20.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 19.2,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
          },
          {
            Date: '2024-04-16T07:00:00+03:00',
            EpochDate: 1713240000,
            Sun: {
              Rise: '2024-04-16T06:10:00+03:00',
              EpochRise: 1713237000,
              Set: '2024-04-16T19:11:00+03:00',
              EpochSet: 1713283860,
            },
            Moon: {
              Rise: '2024-04-16T12:24:00+03:00',
              EpochRise: 1713259440,
              Set: '2024-04-17T02:56:00+03:00',
              EpochSet: 1713311760,
              Phase: 'WaxingGibbous',
              Age: 8,
            },
            Temperature: {
              Minimum: {
                Value: 18.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 27.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 17.3,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 29.5,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Very Warm',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 17.3,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 25.2,
                Unit: 'C',
                UnitType: 17,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 6.4,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'C',
                UnitType: 17,
              },
              Cooling: {
                Value: 5.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 10,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 6,
              IconPhrase: 'Mostly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Mostly cloudy',
              LongPhrase: 'Mostly cloudy',
              PrecipitationProbability: 0,
              ThunderstormProbability: 0,
              RainProbability: 0,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 13.0,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 277,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 31.5,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 357,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 60,
              Evapotranspiration: {
                Value: 3.8,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 5319.5,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 47,
                Maximum: 82,
                Average: 58,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 17.2,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 19.2,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 18.6,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 19.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 23.3,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 21.8,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy and mild',
              LongPhrase: 'Partly cloudy and mild',
              PrecipitationProbability: 0,
              ThunderstormProbability: 0,
              RainProbability: 0,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.3,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 62,
                  Localized: 'ENE',
                  English: 'ENE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 20.4,
                  Unit: 'km/h',
                  UnitType: 7,
                },
                Direction: {
                  Degrees: 10,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Rain: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              Snow: {
                Value: 0.0,
                Unit: 'cm',
                UnitType: 4,
              },
              Ice: {
                Value: 0.0,
                Unit: 'mm',
                UnitType: 3,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 73,
              Evapotranspiration: {
                Value: 0.5,
                Unit: 'mm',
                UnitType: 3,
              },
              SolarIrradiance: {
                Value: 101.9,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 58,
                Maximum: 68,
                Average: 62,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 15.1,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 18.5,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 16.6,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 17.9,
                  Unit: 'C',
                  UnitType: 17,
                },
                Maximum: {
                  Value: 21.4,
                  Unit: 'C',
                  UnitType: 17,
                },
                Average: {
                  Value: 19.2,
                  Unit: 'C',
                  UnitType: 17,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
          },
        ],
      };
    else
      return {
        Headline: {
          EffectiveDate: '2024-04-13T20:00:00+03:00',
          EffectiveEpochDate: 1713027600,
          Severity: 7,
          Text: 'Mild Saturday night',
          Category: 'heat',
          EndDate: '2024-04-14T08:00:00+03:00',
          EndEpochDate: 1713070800,
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
        },
        DailyForecasts: [
          {
            Date: '2024-04-12T07:00:00+03:00',
            EpochDate: 1712894400,
            Sun: {
              Rise: '2024-04-12T06:15:00+03:00',
              EpochRise: 1712891700,
              Set: '2024-04-12T19:09:00+03:00',
              EpochSet: 1712938140,
            },
            Moon: {
              Rise: '2024-04-12T08:35:00+03:00',
              EpochRise: 1712900100,
              Set: '2024-04-12T23:38:00+03:00',
              EpochSet: 1712954280,
              Phase: 'WaxingCrescent',
              Age: 4,
            },
            Temperature: {
              Minimum: {
                Value: 60.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 61.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Cool',
              },
              Maximum: {
                Value: 79.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 61.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Cool',
              },
              Maximum: {
                Value: 70.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 11.0,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 2.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Mostly sunny',
              LongPhrase: 'Mostly sunny',
              PrecipitationProbability: 1,
              ThunderstormProbability: 0,
              RainProbability: 1,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 8.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 318,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 328,
                  Localized: 'NNW',
                  English: 'NNW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 10,
              Evapotranspiration: {
                Value: 0.17,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 7945.7,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 55,
                Maximum: 82,
                Average: 64,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 61.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 65.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 69.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 68.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy',
              LongPhrase: 'Mainly clear early, then areas of low clouds forming',
              PrecipitationProbability: 1,
              ThunderstormProbability: 0,
              RainProbability: 1,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 4.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 30,
                  Localized: 'NNE',
                  English: 'NNE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.5,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 359,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 54,
              Evapotranspiration: {
                Value: 0.01,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 75.0,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 69,
                Maximum: 93,
                Average: 80,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 59.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 61.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 61.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 67.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 64.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
          },
          {
            Date: '2024-04-13T07:00:00+03:00',
            EpochDate: 1712980800,
            Sun: {
              Rise: '2024-04-13T06:14:00+03:00',
              EpochRise: 1712978040,
              Set: '2024-04-13T19:09:00+03:00',
              EpochSet: 1713024540,
            },
            Moon: {
              Rise: '2024-04-13T09:27:00+03:00',
              EpochRise: 1712989620,
              Set: '2024-04-14T00:39:00+03:00',
              EpochSet: 1713044340,
              Phase: 'WaxingCrescent',
              Age: 5,
            },
            Temperature: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 79.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 71.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 9.9,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 4.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Mostly sunny',
              LongPhrase: 'Mostly sunny',
              PrecipitationProbability: 2,
              ThunderstormProbability: 0,
              RainProbability: 2,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 8.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 267,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 16.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 311,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 19,
              Evapotranspiration: {
                Value: 0.16,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 7978.5,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 55,
                Maximum: 79,
                Average: 64,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 61.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 64.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 66.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 70.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 68.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Night: {
              Icon: 38,
              IconPhrase: 'Mostly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Mostly cloudy and mild',
              LongPhrase: 'Mostly cloudy and mild',
              PrecipitationProbability: 3,
              ThunderstormProbability: 0,
              RainProbability: 3,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 4.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 279,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.5,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 316,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 53,
              Evapotranspiration: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 42.0,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 72,
                Maximum: 91,
                Average: 81,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 62.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 64.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 64.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 69.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 66.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
          },
          {
            Date: '2024-04-14T07:00:00+03:00',
            EpochDate: 1713067200,
            Sun: {
              Rise: '2024-04-14T06:13:00+03:00',
              EpochRise: 1713064380,
              Set: '2024-04-14T19:10:00+03:00',
              EpochSet: 1713111000,
            },
            Moon: {
              Rise: '2024-04-14T10:24:00+03:00',
              EpochRise: 1713079440,
              Set: '2024-04-15T01:33:00+03:00',
              EpochSet: 1713133980,
              Phase: 'WaxingCrescent',
              Age: 6,
            },
            Temperature: {
              Minimum: {
                Value: 65.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 64.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 79.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 64.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 71.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 8.8,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 4.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Partly sunny',
              LongPhrase: 'Partly sunny',
              PrecipitationProbability: 2,
              ThunderstormProbability: 0,
              RainProbability: 2,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.2,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 259,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 19.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 276,
                  Localized: 'W',
                  English: 'W',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 32,
              Evapotranspiration: {
                Value: 0.15,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 7687.6,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 61,
                Maximum: 83,
                Average: 68,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 65.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 65.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 66.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 70.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 69.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy and mild',
              LongPhrase: 'Partly cloudy and mild',
              PrecipitationProbability: 5,
              ThunderstormProbability: 0,
              RainProbability: 5,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.8,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 207,
                  Localized: 'SSW',
                  English: 'SSW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 11.5,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 158,
                  Localized: 'SSE',
                  English: 'SSE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 47,
              Evapotranspiration: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 79.4,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 77,
                Maximum: 89,
                Average: 84,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 65.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 64.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 66.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 69.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 68.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
          },
          {
            Date: '2024-04-15T07:00:00+03:00',
            EpochDate: 1713153600,
            Sun: {
              Rise: '2024-04-15T06:12:00+03:00',
              EpochRise: 1713150720,
              Set: '2024-04-15T19:11:00+03:00',
              EpochSet: 1713197460,
            },
            Moon: {
              Rise: '2024-04-15T11:24:00+03:00',
              EpochRise: 1713169440,
              Set: '2024-04-16T02:18:00+03:00',
              EpochSet: 1713223080,
              Phase: 'First',
              Age: 7,
            },
            Temperature: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 75.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 79.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 71.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 9.5,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 4.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 9,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
              ShortPhrase: 'Sunshine and a few clouds',
              LongPhrase: 'Sunshine and a few clouds',
              PrecipitationProbability: 25,
              ThunderstormProbability: 0,
              RainProbability: 25,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 9.2,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 285,
                  Localized: 'WNW',
                  English: 'WNW',
                },
              },
              WindGust: {
                Speed: {
                  Value: 19.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 319,
                  Localized: 'NW',
                  English: 'NW',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 24,
              Evapotranspiration: {
                Value: 0.15,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 7741.5,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 59,
                Maximum: 86,
                Average: 68,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 64.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 65.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 65.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 67.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 71.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 69.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy and mild',
              LongPhrase: 'Partly cloudy and mild',
              PrecipitationProbability: 0,
              ThunderstormProbability: 0,
              RainProbability: 0,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.8,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 51,
                  Localized: 'NE',
                  English: 'NE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 12.7,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 12,
                  Localized: 'NNE',
                  English: 'NNE',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 54,
              Evapotranspiration: {
                Value: 0.01,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 84.3,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 72,
                Maximum: 89,
                Average: 82,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 62.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 65.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 69.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 67.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
          },
          {
            Date: '2024-04-16T07:00:00+03:00',
            EpochDate: 1713240000,
            Sun: {
              Rise: '2024-04-16T06:10:00+03:00',
              EpochRise: 1713237000,
              Set: '2024-04-16T19:11:00+03:00',
              EpochSet: 1713283860,
            },
            Moon: {
              Rise: '2024-04-16T12:24:00+03:00',
              EpochRise: 1713259440,
              Set: '2024-04-17T02:56:00+03:00',
              EpochSet: 1713311760,
              Phase: 'WaxingGibbous',
              Age: 8,
            },
            Temperature: {
              Minimum: {
                Value: 65.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 81.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            RealFeelTemperature: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 85.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Very Warm',
              },
            },
            RealFeelTemperatureShade: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
              Maximum: {
                Value: 77.0,
                Unit: 'F',
                UnitType: 18,
                Phrase: 'Pleasant',
              },
            },
            HoursOfSun: 6.4,
            DegreeDaySummary: {
              Heating: {
                Value: 0.0,
                Unit: 'F',
                UnitType: 18,
              },
              Cooling: {
                Value: 8.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            AirAndPollen: [
              {
                Name: 'AirQuality',
                Value: 0,
                Category: 'Good',
                CategoryValue: 1,
                Type: 'Ozone',
              },
              {
                Name: 'Grass',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Mold',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Ragweed',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'Tree',
                Value: 0,
                Category: 'Low',
                CategoryValue: 1,
              },
              {
                Name: 'UVIndex',
                Value: 10,
                Category: 'Very High',
                CategoryValue: 4,
              },
            ],
            Day: {
              Icon: 6,
              IconPhrase: 'Mostly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Mostly cloudy',
              LongPhrase: 'Mostly cloudy',
              PrecipitationProbability: 0,
              ThunderstormProbability: 0,
              RainProbability: 0,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 8.1,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 277,
                  Localized: 'W',
                  English: 'W',
                },
              },
              WindGust: {
                Speed: {
                  Value: 19.6,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 357,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 60,
              Evapotranspiration: {
                Value: 0.15,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 5319.5,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 47,
                Maximum: 82,
                Average: 58,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 63.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 67.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 66.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 67.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 74.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 71.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
              ShortPhrase: 'Partly cloudy and mild',
              LongPhrase: 'Partly cloudy and mild',
              PrecipitationProbability: 0,
              ThunderstormProbability: 0,
              RainProbability: 0,
              SnowProbability: 0,
              IceProbability: 0,
              Wind: {
                Speed: {
                  Value: 5.8,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 62,
                  Localized: 'ENE',
                  English: 'ENE',
                },
              },
              WindGust: {
                Speed: {
                  Value: 12.7,
                  Unit: 'mi/h',
                  UnitType: 9,
                },
                Direction: {
                  Degrees: 10,
                  Localized: 'N',
                  English: 'N',
                },
              },
              TotalLiquid: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Rain: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Snow: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              Ice: {
                Value: 0.0,
                Unit: 'in',
                UnitType: 1,
              },
              HoursOfPrecipitation: 0.0,
              HoursOfRain: 0.0,
              HoursOfSnow: 0.0,
              HoursOfIce: 0.0,
              CloudCover: 73,
              Evapotranspiration: {
                Value: 0.02,
                Unit: 'in',
                UnitType: 1,
              },
              SolarIrradiance: {
                Value: 101.9,
                Unit: 'W/m²',
                UnitType: 33,
              },
              RelativeHumidity: {
                Minimum: 58,
                Maximum: 68,
                Average: 62,
              },
              WetBulbTemperature: {
                Minimum: {
                  Value: 59.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 65.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 62.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
              WetBulbGlobeTemperature: {
                Minimum: {
                  Value: 64.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Maximum: {
                  Value: 70.0,
                  Unit: 'F',
                  UnitType: 18,
                },
                Average: {
                  Value: 66.0,
                  Unit: 'F',
                  UnitType: 18,
                },
              },
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
          },
        ],
      };
  } else {
    if (metric)
      return {
        Headline: {
          EffectiveDate: '2024-04-13T20:00:00+03:00',
          EffectiveEpochDate: 1713027600,
          Severity: 7,
          Text: 'Mild Saturday night',
          Category: 'heat',
          EndDate: '2024-04-14T08:00:00+03:00',
          EndEpochDate: 1713070800,
          MobileLink:
            'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us',
        },
        DailyForecasts: [
          {
            Date: '2024-04-12T07:00:00+03:00',
            EpochDate: 1712894400,
            Temperature: {
              Minimum: {
                Value: 15.5,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.2,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us',
          },
          {
            Date: '2024-04-13T07:00:00+03:00',
            EpochDate: 1712980800,
            Temperature: {
              Minimum: {
                Value: 17.2,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 38,
              IconPhrase: 'Mostly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us',
          },
          {
            Date: '2024-04-14T07:00:00+03:00',
            EpochDate: 1713067200,
            Temperature: {
              Minimum: {
                Value: 18.3,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.3,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us',
          },
          {
            Date: '2024-04-15T07:00:00+03:00',
            EpochDate: 1713153600,
            Temperature: {
              Minimum: {
                Value: 17.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 23.7,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us',
          },
          {
            Date: '2024-04-16T07:00:00+03:00',
            EpochDate: 1713240000,
            Temperature: {
              Minimum: {
                Value: 18.4,
                Unit: 'C',
                UnitType: 17,
              },
              Maximum: {
                Value: 27.0,
                Unit: 'C',
                UnitType: 17,
              },
            },
            Day: {
              Icon: 6,
              IconPhrase: 'Mostly cloudy',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us',
          },
        ],
      };
    else
      return {
        Headline: {
          EffectiveDate: '2024-04-13T20:00:00+03:00',
          EffectiveEpochDate: 1713027600,
          Severity: 7,
          Text: 'Mild Saturday night',
          Category: 'heat',
          EndDate: '2024-04-14T08:00:00+03:00',
          EndEpochDate: 1713070800,
          MobileLink: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
          Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us',
        },
        DailyForecasts: [
          {
            Date: '2024-04-11T07:00:00+03:00',
            EpochDate: 1712808000,
            Temperature: {
              Minimum: {
                Value: 58.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
          },
          {
            Date: '2024-04-12T07:00:00+03:00',
            EpochDate: 1712894400,
            Temperature: {
              Minimum: {
                Value: 59.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
          },
          {
            Date: '2024-04-13T07:00:00+03:00',
            EpochDate: 1712980800,
            Temperature: {
              Minimum: {
                Value: 61.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 38,
              IconPhrase: 'Mostly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
          },
          {
            Date: '2024-04-14T07:00:00+03:00',
            EpochDate: 1713067200,
            Temperature: {
              Minimum: {
                Value: 63.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 74.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 3,
              IconPhrase: 'Partly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 35,
              IconPhrase: 'Partly cloudy',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
          },
          {
            Date: '2024-04-15T07:00:00+03:00',
            EpochDate: 1713153600,
            Temperature: {
              Minimum: {
                Value: 61.0,
                Unit: 'F',
                UnitType: 18,
              },
              Maximum: {
                Value: 76.0,
                Unit: 'F',
                UnitType: 18,
              },
            },
            Day: {
              Icon: 2,
              IconPhrase: 'Mostly sunny',
              HasPrecipitation: false,
            },
            Night: {
              Icon: 36,
              IconPhrase: 'Intermittent clouds',
              HasPrecipitation: false,
            },
            Sources: ['AccuWeather'],
            MobileLink:
              'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
            Link: 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
          },
        ],
      };
  }
}

var globalLocationCity;

export async function getLocationCity() {
  if (!globalLocationCity) {
    globalLocationCity = {
      LocalizedName: 'Jerusalem',
      Key: '213225',
      country: 'Israel',
    };
    console.log('Location city defined: ', globalLocationCity);
  }
  return globalLocationCity;
}
