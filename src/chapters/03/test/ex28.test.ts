import { ex28 } from '../ex28'

describe('28. Remove MediaWiki markups', () => {
  it('the basic information of the country in plain text format', async () => {
    expect(await ex28()).toEqual({
      linking_name: 'the United Kingdom',
      conventional_long_name:
        'United Kingdom of Great Britain and Northern Ireland',
      image_flag: 'Flag of the United Kingdom.svg',
      alt_flag:
        'A flag featuring both cross and saltire in red, white and blue',
      other_symbol:
        'Royal Coat of Arms of the United Kingdom.svgRoyal Coat of Arms of the United Kingdom (Scotland).svg',
      other_symbol_type:
        'Royal coat of arms of the United Kingdom:The coat of arms on the left is used in England, Northern Ireland, and Wales; the version on the right is used in Scotland',
      national_anthem: [
        '"God Save the Queen"There is no authorised version of the national anthem as the words are a matter of tradition; only the first verse is usually sung.https://www.royal.uk/national-anthem No law was passed making "God Save the Queen" the official anthem. In the English tradition, such laws are not necessary; proclamation and usage are sufficient to make it the national anthem. "God Save the Queen" also serves as the Honors music for certain Commonwealth realms. The words Queen, she, her\'\', used at present (in the reign of Elizabeth II), are replaced by \'\'King, he, him when the monarch is male.',
        'United States Navy Band - God Save the Queen.ogg',
      ],
      image_map: [
        'Europe-UK (orthographic projection).svg',
        'Show globe',
        'Europe-UK.svg',
        'Show map of Europe',
      ],
      map_caption: [
        'countryprefix=the',
        'location_color=dark green',
        'region=Europe',
        'region_color=dark grey',
      ],
      image_map2: [
        'Location of the United Kingdom,',
        'Crown dependencies and',
        'British Overseas Territories (red)',
        'United Kingdom (+overseas territories and crown dependencies) in the World (+Antarctica claims).svg',
      ],
      capital: 'London',
      coordinates: "51°30'N 0°7'W",
      largest_city: 'capital',
      languages_type: ['Official language', 'nobold|and national language'],
      languages: 'English language',
      languages2_type:
        "Regional and minority languagesScots, Ulster Scots, Welsh, Cornish, Scottish Gaelic and Irish are classed as Regional language or Minority language languages under the Council of Europe's European Charter for Regional or Minority Languages. https://www.gov.uk/government/organisations/home-office/about/welsh-language-scheme See also Languages of the United Kingdom. Welsh has limited de jure official status in Wales, as well as in the provision of national government services provided for Wales.",
      languages2:
        'Scots language · Ulster Scots dialects · Welsh language · Cornish language · Scottish Gaelic · Irish language',
      ethnic_groups: [
        '87.1% White British"This category could include Polish responses from the country specific question for Scotland which would have been outputted to ‘Other White’ and then included under ‘White’ for UK ... ‘White Africans’ may also have been recorded under ‘Other White’ and then included under ‘White’ for UK."',
        '7.0% British Asian',
        '3.0% Black British',
        '2.0% Mixed (United Kingdom ethnicity category)',
        '0.9% others',
      ],
      ethnic_groups_year: 'United Kingdom Census 2011',
      religion: [
        '59.5% Christianity in the United Kingdom',
        '25.7% Irreligion in the United Kingdom',
        '4.4% Islam in the United Kingdom',
        '1.3% Hinduism in the United Kingdom',
        '0.7% Sikhism in the United Kingdom',
        '0.4% Judaism in the United Kingdom',
        '0.4% Buddhism in the United Kingdom',
        '0.4% Religion in the United Kingdom',
        '7.2% Unknown',
      ],
      religion_year:
        'United Kingdom Census 2011https://www.independent.co.uk/news/uk/home-news/less-religious-and-more-ethnically-diverse-census-reveals-a-picture-of-britain-today-8406506.html',
      demonym: 'British people · Briton',
      membership: ['England', 'Scotland', 'Wales', 'Northern Ireland'],
      membership_type: 'Constituent countries',
      government_type: [
        'Unitary state parliamentary',
        'constitutional monarchy',
      ],
      leader_title1: 'Monarchy of the United Kingdom',
      leader_name1: 'Elizabeth II',
      leader_title2: 'Prime Minister of the United Kingdom',
      leader_name2: 'Boris Johnson',
      legislature: 'Parliament of the United Kingdom',
      upper_house: 'House of Lords',
      lower_house: 'House of Commons of the United Kingdom',
      sovereignty_type: 'History of the formation of the United Kingdom',
      established_event1: 'Laws in Wales Acts',
      established_date1: '1535 and 1542',
      established_event2: 'Union of the Crowns under James VI and I',
      established_date2: '24 March 1603',
      established_event3: 'Acts of Union of England and Scotland',
      established_date3: '1 May 1707',
      established_event4: 'Acts of Union of Great Britain and Ireland',
      established_date4: '1 January 1801',
      established_event5: 'Irish Free State Constitution Act',
      established_date5: '5 December 1922',
      established_event6:
        'Accession of the United Kingdom to the European Communitiesrefn|group=note|European Union since 1993.',
      established_date6: '1 January 1973',
      established_event7: 'Brexit',
      established_date7: '31 January 2020',
      area_km2: '242495',
      area_footnote:
        'http://unstats.un.org/unsd/demographic/products/dyb/dyb2012/Table03.pdf',
      area_rank: '78th',
      area_sq_mi: '93628',
      percent_water: '1.34',
      population_estimate:
        '▲ 67,886,004https://population.un.org/wpp/Download/Standard/Population/',
      population_census:
        '63,182,178http://www.ons.gov.uk/ons/guide-method/census/2011/uk-census/index.html',
      population_estimate_year: '2020',
      population_estimate_rank: '21st',
      population_census_year: '2011',
      population_census_rank: '22nd',
      population_density_km2: '270.7',
      population_density_sq_mi: '701.2',
      population_density_rank: '50th',
      GDP_PPP:
        '▲ $3.131 trillionhttps://www.imf.org/external/pubs/ft/weo/2019/02/weodata/weorept.aspx?pr.x=14&pr.y=17&sy=2017&ey=2021&scsm=1&ssd=1&sort=country&ds=.&br=1&c=112&s=NGDPD%2CPPPGDP%2CNGDPDPC%2CPPPPC&grp=0&a=',
      GDP_PPP_year: '2019',
      GDP_PPP_rank: '9th',
      GDP_PPP_per_capita: '▲ $46,827',
      GDP_PPP_per_capita_rank: '26th',
      GDP_nominal: '▼ $2.744 trillion',
      GDP_nominal_year: '2019',
      GDP_nominal_rank: '6th',
      GDP_nominal_per_capita: '▼ $41,030',
      GDP_nominal_per_capita_rank: '20th',
      Gini: '33.1',
      Gini_year: '2017',
      Gini_change: 'increase',
      Gini_ref:
        'https://ec.europa.eu/eurostat/tgm/table.do?tab=table&init=1&language=en&pcode=tessi190&plugin=1',
      Gini_rank: '33rd',
      HDI: '0.920',
      HDI_year: '2018',
      HDI_change: 'increase',
      HDI_ref: 'http://hdr.undp.org/sites/default/files/hdr2019.pdf',
      HDI_rank: '15th',
      currency:
        "Pound sterlingSome of the devolved countries, Crown dependencies and British Overseas Territories issue their own sterling banknotes or currencies, or use another nation's currency. See List of British currencies for more information",
      currency_code: 'GBP',
      utc_offset: 'sp',
      time_zone: 'Greenwich Mean Time, Western European Time',
      utc_offset_DST: '+1',
      time_zone_DST: 'British Summer Time, Western European Summer Time',
      DST_note:
        'Also in observed by the Crown dependencies, and in the two British Overseas Territories of Gibraltar and Saint Helena, Ascension and Tristan da Cunha (though in the latter, without daylight saving time). For further information see Time in the United Kingdom#British territories',
      date_format: ['dd/mm/yyyy', 'yyyy-mm-dd (Anno Domini)'],
      electricity: '230 V–50 Hz',
      drives_on:
        'Left- and right-hand trafficExcept two overseas territories, Gibraltar, the British Indian Ocean Territory and Savoy Court in London.',
      calling_code:
        'Telephone numbers in the United KingdomTelephone numbers in the United Kingdom#Telephone numbers in Overseas Territories',
      cctld:
        '.ukThe .gb domain is also reserved for the UK, but has been little used.',
      today: '',
    })
  })
})
