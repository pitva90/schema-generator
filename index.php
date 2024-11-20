<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Schema.org - Generator</title>
  <link rel="stylesheet" type="text/css" href="style.css?v=0.3">
  <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
  <script src="script.js?v=0.4"></script>
</head>

<body>
  <div class="container">
    <div class="top-wrap">
      <h1>Schema.org - Generator <span class="version">v. 0.0.1</span> <span>by Pitva</span></h1>
    </div>

    <div id="organization" class="tab-item active">
      <?php include('schema/organization.php'); ?>
    </div>
  </div>
</body>
</html>

<script type="application/ld+json">
{
"@context": "https://schema.org",
"@type": "Store",
"name": "Alza",
"alternateName": "Alza - obchod",
"legalName": "Alza.cz a.s.",
"slogan": "Nazdar pozemšťane!",
"telephone": "+42012345678",
"email": "info@alza.cz",
"foundingDate": "2003",
"vatID": "CZ27082440",
"address":{
"@type":"PostalAddress",
"streetAddress": "Jankovcova 1522/53",
"addressRegion": "Praha",
"postalCode": "17000",
"addressLocality": "Holešovice",
"addressCountry": "CZ"
},
"image": "https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg",
"logo": "https://cdn.alza.cz/images/web-static/eshop-logos/alza_cz.svg",
"url": "https://www.alza.cz/",
"sameAs": [
"https://www.facebook.com/alza.cz/",
"https://www.instagram.com/alza_czsk/",
"https://www.youtube.com/channel/UC0wtqzWrBA5gL4Jr_QIQTgg",
"https://x.com/Alzacz"
],
"paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
"awards": ["Autorizovaný servis Epson", "Autorizovaný prodejce Microsoft", ""],
"priceRange": "$$",
"description": "Největší obchod s počítači a elektronikou ✅ Přes 40 prodejen, více než 1 000 Alzaboxů a 15 000 dalších odběrných míst ✅ Elektronika, hračky, domácí pořeby atd.",
"amenityFeature": [
{
"@type": "LocationFeatureSpecification",
"name": "Wi-Fi",
"value": true
},
{
"@type": "LocationFeatureSpecification",
"name": "Velkoobchodní ceny",
"value": true
},
{
"@type": "LocationFeatureSpecification",
"name": "Alzák do každé rodiny",
"value": true
}
],

"location":[
{
"@type": "Place",
"name":"Alza.cz Showroom Brno - střed",
"address":{
"@type":"PostalAddress",
"addressRegion":"Brno",
"streetAddress":"Skořepka 336/15",
"addressLocality":"Brno-Střed",
"postalCode":"60200",
"addressCountry":"CZ"
},
"geo":{
"@type":"GeoCoordinates",
"latitude":"49.1926979",
"longitude":"16.6156361"
},
"hasMap":"https://maps.app.goo.gl/rmgL49t3hXAzcaiz5",
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
"opens": "08:00",
"closes": "20:00"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Sunday"],
"opens": "09:00",
"closes": "19:00"
}
]
},
{
"@type": "Place",
"name":"Alza.cz pobočka Brno - Lískovec",
"address":{
"@type":"PostalAddress",
"addressRegion":"Brno",
"streetAddress":"Netroufalky 770/16",
"addressLocality":"Bohunice",
"postalCode":"62500",
"addressCountry":"CZ"
},
"geo":{
"@type":"GeoCoordinates",
"latitude":"49.1771347",
"longitude":"16.564106"
},
"hasMap":"https://maps.app.goo.gl/a3yf1pmamiyJCi9KA",
"openingHoursSpecification": [{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
"opens": "08:00",
"closes": "20:00"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Saturday"],
"opens": "09:00",
"closes": "20:00"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Sunday"],
"opens": "closed",
"closes": "closed"
}
]
}
],
"contactPoint": [
{
"@type": "ContactPoint",
"email": "customer@alza.cz",
"contactType": "Customer Service",
"availableLanguage": ["Czech", "Slovak", "English"]
},
{
"@type": "ContactPoint",
"telephone": "+420123456987",
"email": "servis@alza.cz",
"contactType": "Servis",
"availableLanguage": ["Czech", "Slovak", "English"]
},
{
"@type": "ContactPoint",
"telephone": "+420123456987",
"email": "sales@alza.cz",
"contactType": "Sales",
"availableLanguage": ["Czech", "Slovak", "English"]
},
{
"@type": "ContactPoint",
"telephone": "+420123456987",
"email": "pr@alza.cz",
"contactType": "Media",
"availableLanguage": ["Czech", "Slovak", "English"]
}
]
}
</script>
