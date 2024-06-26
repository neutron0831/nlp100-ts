import { ex26 } from '../ex26'

describe('26. Remove emphasis markups', () => {
  it('remove emphasis MediaWiki markups from the values in the Infobox "country"', async () => {
    expect(await ex26()).toEqual({
      linking_name:
        'the United Kingdom<!--Note: "the" required here as this entry used to create wikilinks-->',
      conventional_long_name:
        'United Kingdom of Great Britain and Northern Ireland',
      image_flag: 'Flag of the United Kingdom.svg',
      alt_flag:
        'A flag featuring both cross and saltire in red, white and blue',
      other_symbol:
        '[[File:Royal Coat of Arms of the United Kingdom.svg|x100px]][[File:Royal Coat of Arms of the United Kingdom (Scotland).svg|x100px]]',
      other_symbol_type:
        '[[Royal coat of arms of the United Kingdom|Royal coats of arms]]:{{#tag:ref |The coat of arms on the left is used in England, Northern Ireland, and Wales; the version on the right is used in Scotland|group=note}}',
      national_anthem:
        '"[[God Save the Queen]]"{{#tag:ref |There is no authorised version of the national anthem as the words are a matter of tradition; only the first verse is usually sung.<ref>{{cite web |title=National Anthem |url=https://www.royal.uk/national-anthem |website=Official web site of the British Royal Family |accessdate=4 June 2016|date=15 January 2016 }}</ref> No law was passed making "God Save the Queen" the official anthem. In the English tradition, such laws are not necessary; proclamation and usage are sufficient to make it the national anthem. "God Save the Queen" also serves as the [[Honors music|Royal anthem]] for certain [[Commonwealth realms]]. The words Queen, she, her, used at present (in the reign of Elizabeth II), are replaced by King, he, him when the monarch is male. |group=note}}\n<br /><div style="display:inline-block;margin-top:0.4em;">[[File:United States Navy Band - God Save the Queen.ogg]]</div>',
      image_map:
        '{{Switcher|[[File:Europe-UK (orthographic projection).svg|frameless]]|Show globe|[[File:Europe-UK.svg|upright=1.15|frameless]]|Show map of Europe|default=1}}',
      map_caption:
        '{{map_caption |countryprefix=the |location_color=dark green |region=Europe |region_color=dark grey}}',
      image_map2:
        '{{collapsible list\n | titlestyle = background:transparent;text-align:center;line-height:normal;font-weight:normal;\n | title = Location of the United Kingdom,<br /> [[Crown dependencies]] and<br /> [[British Overseas Territories]] (red)\n | liststyle = text-align:center;<!--Note: fixes map left-aligning on mobile -->\n | [[File:United Kingdom (+overseas territories and crown dependencies) in the World (+Antarctica claims).svg|frameless|upright=1.15]]\n }}',
      capital: '[[London]]',
      coordinates: '{{coord|51|30|N|0|7|W|type:city}}',
      largest_city: 'capital',
      languages_type:
        'Official language<br /> {{nobold|and national language}}',
      languages:
        '[[English language|English]]<!--Note: Just English, don\'t add "British English"-->',
      languages2_type:
        'Regional and minority languages{{#tag:ref |Scots, Ulster Scots, Welsh, Cornish, Scottish Gaelic and Irish are classed as [[Regional language|regional]] or [[Minority language|minority]] languages under the [[Council of Europe]]\'s [[European Charter for Regional or Minority Languages]]. <ref name="reglang">{{cite web |url=http://conventions.coe.int/treaty/Commun/ListeDeclarations.asp?CL=ENG&NT=148&VL=1 |title=List of declarations made with respect to treaty No. 148 |publisher=[[Council of Europe]] |accessdate=12 December 2013}}</ref> These include defined obligations to promote those languages.<ref>{{cite web |url=https://www.gov.uk/guidance/content-design/welsh-language-on-gov-uk|title=Welsh language on GOV.UK – Content design: planning, writing and managing content – Guidance |website=www.gov.uk |accessdate=3 August 2018}}</ref><ref>{{cite news |url=https://www.gov.uk/government/organisations/department-for-transport/about/welsh-language-scheme |title=Welsh language scheme |work=GOV.UK |accessdate=3 August 2018}}</ref><ref>{{cite news |url=https://www.gov.uk/government/organisations/home-office/about/welsh-language-scheme |title=Welsh language scheme |work=GOV.UK |accessdate=3 August 2018}}</ref> See also [[Languages of the United Kingdom]]. Welsh has limited [[de jure]] official status in Wales, as well as in the provision of national government services provided for Wales.|group=note<!--(end #tag:)-->}}',
      languages2:
        '{{hlist\n <!--Anglo-->\n  | [[Scots language|Scots]]\n  | [[Ulster Scots dialects|Ulster Scots]]\n <!--Brittonic-->\n  | [[Welsh language|Welsh]]\n  | [[Cornish language|Cornish]]\n <!--Goidelic-->\n  | [[Scottish Gaelic]]<!--Keep "Scottish Gaelic"; people will find "Gaelic" confusing, as the Irish language is also commonly called "Gaelic"-->\n  | [[Irish language|Irish]]\n  }}',
      ethnic_groups:
        '{{ublist |item_style=white-space:nowrap;\n  | 87.1% [[White British|White]]<ref group=note>"This category could include Polish responses from the country specific question for Scotland which would have been outputted to ‘Other White’ and then included under ‘White’ for UK ... ‘White Africans’ may also have been recorded under ‘Other White’ and then included under ‘White’ for UK."</ref>\n  | 7.0% [[British Asian|Asian]]\n  | 3.0% [[Black British|Black]]\n  | 2.0% [[Mixed (United Kingdom ethnicity category)|Mixed]]\n  | 0.9% others\n  }}',
      ethnic_groups_year: '[[United Kingdom Census 2011|2011]]',
      religion:
        '<!-- direct figures from ReligionUNdata reference -->{{ublist |item_style=white-space:nowrap;\n  | {{#expr:(37583962/63182178)*100 round 1}}% [[Christianity in the United Kingdom|Christian]]\n  | {{#expr:(16221509/63182178)*100 round 1}}% [[Irreligion in the United Kingdom|Irreligious]]\n  | {{#expr:( 2786635/63182178)*100 round 1}}% [[Islam in the United Kingdom|Muslim]]\n  | {{#expr:(  835418/63182178)*100 round 1}}% [[Hinduism in the United Kingdom|Hindu]]\n  | {{#expr:(  432429/63182178)*100 round 1}}% [[Sikhism in the United Kingdom|Sikh]]\n  | {{#expr:(  269568/63182178)*100 round 1}}% [[Judaism in the United Kingdom|Jewish]]\n  | {{#expr:(  261584/63182178)*100 round 1}}% [[Buddhism in the United Kingdom|Buddhist]]\n  | {{#expr:(  262750/63182178)*100 round 1}}% [[Religion in the United Kingdom|Other]]\n  | {{#expr:( 4528323/63182178)*100 round 1}}% Unknown\n  }}',
      religion_year:
        '[[United Kingdom Census 2011|2011]]<ref name="ReligionUNdata">{{cite web |url=http://data.un.org/Data.aspx?d=POP&f=tableCode:28;countryCode:826&c=2,3,6,8,10,12,14,15,16&s=_countryEnglishNameOrderBy:asc,refYear:desc,areaCode:asc&v=1 |title=UNdata {{!}} record view {{!}} Population by religion, sex and urban/rural residence |website=data.un.org |accessdate=13 October 2018}}</ref><ref name="Philby">{{cite news |last=Philby |first=Charlotte |title=Less religious and more ethnically diverse: Census reveals a picture of Britain today |url=https://www.independent.co.uk/news/uk/home-news/less-religious-and-more-ethnically-diverse-census-reveals-a-picture-of-britain-today-8406506.html |newspaper=[[The Independent]] |date=12 December 2012 |location=London}}</ref>',
      demonym: '{{hlist |[[British people|British]]|Briton}}',
      membership:
        '{{plainlist|\n* [[England]]\n* [[Scotland]]\n* [[Wales]]\n* [[Northern Ireland]]}}',
      membership_type: 'Constituent countries',
      government_type:
        '[[Unitary state|Unitary]] [[parliamentary]]<br />[[constitutional monarchy]]',
      leader_title1: '[[Monarchy of the United Kingdom|Monarch]]',
      leader_name1: '[[Elizabeth&nbsp;II]]',
      leader_title2: '[[Prime Minister of the United Kingdom|Prime Minister]]',
      leader_name2: '[[Boris Johnson]]',
      legislature: '[[Parliament of the United Kingdom|Parliament]]',
      upper_house: '[[House of Lords]]',
      lower_house:
        '[[House of Commons of the United Kingdom|House of Commons]]',
      sovereignty_type:
        '[[History of the formation of the United Kingdom|Formation]]',
      established_event1: '[[Laws in Wales Acts]]',
      established_date1: '1535 and 1542',
      established_event2: '[[Union of the Crowns]] under [[James VI and I]]',
      established_date2: '24 March 1603',
      established_event3: '[[Acts of Union of England and Scotland]]',
      established_date3: '1 May 1707',
      established_event4: '[[Acts of Union of Great Britain and Ireland]]',
      established_date4: '1 January 1801',
      established_event5: '[[Irish Free State Constitution Act]]',
      established_date5: '5 December 1922',
      established_event6:
        '[[Accession of the United Kingdom to the European Communities|Accession to the European Communities]]{{refn|group=note|[[European Union]] since 1993.}}',
      established_date6: '1 January 1973',
      established_event7: '[[Brexit|Withdrawal from the European Union]]',
      established_date7: '31 January 2020',
      area_km2: '242495',
      area_footnote:
        '<ref>{{cite journal |url=http://unstats.un.org/unsd/demographic/products/dyb/dyb2012/Table03.pdf |title=Demographic Yearbook – Table 3: Population by sex, rate of population increase, surface area and density |publisher=United Nations Statistics Division |year=2012 |accessdate=9 August 2015}}</ref>',
      area_rank: '78th',
      area_sq_mi: '93628',
      percent_water: '1.34',
      population_estimate:
        '{{increase}} 67,886,004<ref>{{Cite web|url=https://population.un.org/wpp/Download/Standard/Population/|title=World Population Prospects - Population Division - United Nations|website=population.un.org|access-date=2020-03-31}}</ref>',
      population_census:
        '63,182,178<ref name="pop_census">{{cite web |url=http://www.ons.gov.uk/ons/guide-method/census/2011/uk-census/index.html |title=2011 UK censuses |publisher=Office for National Statistics |accessdate=17 December 2012}}</ref>',
      population_estimate_year: '2020',
      population_estimate_rank: '21st',
      population_census_year: '2011',
      population_census_rank: '22nd',
      population_density_km2: '270.7',
      population_density_sq_mi: '701.2',
      population_density_rank: '50th',
      GDP_PPP:
        '{{increase}} $3.131&nbsp;trillion<ref name="IMFWEOUK">{{cite web |url=https://www.imf.org/external/pubs/ft/weo/2019/02/weodata/weorept.aspx?pr.x=14&pr.y=17&sy=2017&ey=2021&scsm=1&ssd=1&sort=country&ds=.&br=1&c=112&s=NGDPD%2CPPPGDP%2CNGDPDPC%2CPPPPC&grp=0&a= |title=World Economic Outlook Database, October 2019 |publisher=[[International Monetary Fund]] |website=IMF.org |accessdate=30 October 2019}}</ref>',
      GDP_PPP_year: '2019',
      GDP_PPP_rank: '9th',
      GDP_PPP_per_capita: '{{increase}} $46,827<ref name="IMFWEOUK"/>',
      GDP_PPP_per_capita_rank: '26th',
      GDP_nominal: '{{decrease}} $2.744&nbsp;trillion<ref name="IMFWEOUK"/>',
      GDP_nominal_year: '2019',
      GDP_nominal_rank: '6th',
      GDP_nominal_per_capita: '{{decrease}} $41,030<ref name="IMFWEOUK"/>',
      GDP_nominal_per_capita_rank: '20th',
      Gini: '33.1',
      Gini_year: '2017',
      Gini_change: 'increase',
      Gini_ref:
        '<ref name="eurogini">{{cite web |url=https://ec.europa.eu/eurostat/tgm/table.do?tab=table&init=1&language=en&pcode=tessi190&plugin=1 |title=Gini coefficient of equivalised disposable income - EU-SILC survey |publisher=[[Eurostat]] |website=ec.europa.eu |access-date=7 March 2019}}</ref>',
      Gini_rank: '33rd',
      HDI: '0.920<!--number only-->',
      HDI_year:
        '2018<!-- Please use the year to which the data refers, not the publication year-->',
      HDI_change: 'increase<!--increase/decrease/steady-->',
      HDI_ref:
        '<ref>{{cite web |url=http://hdr.undp.org/sites/default/files/hdr2019.pdf |title=Human Development Report 2019 |publisher=United Nations Development Programme |date=2019 |accessdate=9 December 2019}}</ref>',
      HDI_rank: '15th',
      currency:
        "[[Pound&nbsp;sterling]]<ref group=note>Some of the devolved countries, Crown dependencies and British Overseas Territories issue their own sterling banknotes or currencies, or use another nation's currency. See [[List of British currencies]] for more information</ref>",
      currency_code: 'GBP',
      utc_offset: '{{sp}}',
      time_zone: '[[Greenwich Mean Time]], [[Western European Time|WET]]',
      utc_offset_DST: '+1',
      time_zone_DST:
        '[[British Summer Time]], [[Western European Summer Time|WEST]]',
      DST_note:
        '<ref group=note>Also in observed by the [[Crown dependencies]], and in the two British Overseas Territories of [[Gibraltar]] and [[Saint Helena, Ascension and Tristan da Cunha]] (though in the latter, without daylight saving time). For further information see [[Time in the United Kingdom#British territories]]</ref>',
      date_format:
        '{{abbr|dd|day}}/{{abbr|mm|month}}/{{abbr|yyyy|year}}<br />{{abbr|yyyy|year}}-{{abbr|mm|month}}-{{abbr|dd|day}}&nbsp;([[Anno Domini|AD]])',
      electricity: '230 V–50 Hz',
      drives_on:
        '[[Left- and right-hand traffic|left]]<ref group=note>Except two overseas territories, [[Gibraltar]], the [[British Indian Ocean Territory]] and [[Savoy Court]] in London.</ref>',
      calling_code:
        '[[Telephone numbers in the United Kingdom|+44]]<ref group=note>[[Telephone numbers in the United Kingdom#Telephone numbers in Overseas Territories|Excludes most overseas territories]]</ref>',
      cctld:
        '[[.uk]]<ref group=note>The [[.gb]] domain is also reserved for the UK, but has been little used.</ref>',
      today: '',
    })
  })
})
