<div class="import-btn-wrap">
  <span class="import-btn">Získat data z ARES</span>
</div>
<?php /*
<div id="organization-select" class="group-wrap">
  <h2 class="group-name">Hlavní udaje</h2>
  <div class="inputs-outer-wrap">
    <select name="org-select" id="org-select">
      <option value="localBusiness">LocalBusiness</option>
      <option value="AutoRepair">AutoRepair</option>
    </select>
  </div>
</div>
*/ ?>
<div id="organization-main" class="group-wrap">
  <h2 class="group-name">Hlavní udaje</h2>
  <div class="inputs-outer-wrap">
    <div class="inputs-wrap">
      <div class="input-item">
        <label for="name">Hlavní název</label>
        <input id="name" name="name" type="text">
      </div>
      <div class="input-item">
        <label for="alternateName">Alternativní název</label>
        <input id="alternateName" name="alternateName" type="text">
      </div>
      <div class="input-item">
        <label for="legalName">Oficiální název</label>
        <input id="legalName" name="legalName" type="text">
      </div>
      <div class="input-item">
        <label for="slogan">Firemní slogan</label>
        <input id="slogan" name="slogan" type="text">
      </div>
      <div class="input-item">
        <label for="telephone">Hlavní telefon</label>
        <input id="telephone" name="telephone" type="tel">
      </div>
      <div class="input-item">
        <label for="email">Hlavní e-mail</label>
        <input id="email" name="email" type="email">
      </div>
      <div class="input-item">
        <label for="foundingDate">Rok založení</label>
        <input id="foundingDate" name="foundingDate" type="number">
      </div>
      <div class="input-item">
        <label for="vatID">DIČ</label>
        <input id="vatID" name="vatID" type="text">
      </div>
    </div>
  </div>
</div>

<div id="organization-address" class="group-wrap">
  <h2 class="group-name">Adresa sídla</h2>
  <div class="inputs-outer-wrap">
    <div class="inputs-wrap">
      <div class="input-item">
        <label for="streetAddress-main">Ulice</label>
        <input id="streetAddress-main" name="streetAddress" type="text">
      </div>
      <div class="input-item">
        <label for="addressRegion-main">Město</label>
        <input id="addressRegion-main" name="addressRegion" type="text">
      </div>
      <div class="input-item">
        <label for="postalCode-main">PSČ</label>
        <input id="postalCode-main" name="postalCode" type="text">
      </div>
      <div class="input-item">
        <label for="addressLocality-main">Lokalita (Královo pole, Žižkov)</label>
        <input id="addressLocality-main" name="addressLocality" type="text">
      </div>
      <div class="input-item">
        <label for="addressCountry-main">Stát (Kód - 2 nebo 3 znaky)</label>
        <input id="addressCountry-main" name="addressCountry" type="text" placeholder="CZ, CZE, SK, SVK, ENG, HU, ...">
      </div>
    </div>
  </div>
</div>

<div id="organization-logo" class="group-wrap">
  <h2 class="group-name">Logo</h2>
  <div class="inputs-outer-wrap">
    <div class="inputs-wrap">
      <div class="input-item full-width last-input" data-input-index="1">
        <label for="logo-1">Logo URL #1</label>
        <input id="logo-1" name="logo-1" type="text">
      </div>
    </div>
  </div>
</div>

<div id="organization-web" class="group-wrap">
  <h2 class="group-name">Odkazy</h2>
  <div class="inputs-outer-wrap">
    <div class="inputs-wrap">
      <div class="input-item full-width">
        <label for="url">Hlavní URL</label>
        <input id="url" name="url" type="text">
      </div>
      <div class="input-item full-width last-input" data-input-index="1">
        <label for="otherUrl-1">Další URL (Facebook, Instagram, ...) #1</label>
        <input id="otherUrl-1" name="otherUrl" type="text" class="other-urls">
      </div>
    </div>
  </div>
</div>

<div id="organization-info" class="group-wrap">
  <h2 class="group-name">Vlastnosti</h2>
  <div class="inputs-outer-wrap">
    <div class="inputs-wrap">
      <?php /*<div class="input-item speciality full-width">
        <label for="specialty">Specializace (více možností oddělte čárkou)</label>
        <input id="specialty" name="specialty" type="text" placeholder="Diagnostika motoru, Hyundai, Zimní pergoly na míru, ...">
      </div> */ ?>
      <div class="input-item description full-width">
        <label for="description-main">Popis obchodu, firmy, co nabízí, na co zaměřuje, v čem vyniká...</label>
        <input id="description-main" name="description" type="text">
      </div>
      <div class="input-item payments full-width">
        <label for="paymentAccepted">Možnost platby (více možností oddělte čárkou)</label>
        <input id="paymentAccepted" name="paymentAccepted" type="text" placeholder="Cash, Credit Card, Bank Transfer, ...">
      </div>
      <div class="input-item awards full-width">
        <label for="awards">Certifikace (více možností oddělte čárkou)</label>
        <input id="awards" name="awards" type="text" placeholder="Autorizovaný servis Škoda, ISO 9001:2015, ...">
      </div>
      <div class="input-item price-range full-width">
        <label for="priceRange">Cenová hladina ($-$$$$)</label>
        <input id="priceRange" name="priceRange" type="text">
      </div>
      <div class="input-item price-range full-width">
        <label for="amenityFeature">Výhody firmy (více možností oddělte čárkou)</label>
        <input id="amenityFeature" name="amenityFeature" type="text" placeholder="Wi-Fi, Parkování zdarma, ...">
      </div>
    </div>
  </div>
</div>

<?php /*
<div id="organization-offers-1" class="group-wrap offer last-group" data-group-index="1">
  <h2 class="group-name">Produkty / Služby #1</h2>
  <div class="inputs-outer-wrap">
    <div class="inputs-wrap">
      <div class="input-item offer-type full-width">
        <label for="type-1">Typ</label>
        <select id="type-1" name="type">
          <option value="Product">Produkt</option>
          <option value="Service">Služba</option>
        </select>
      </div>
      <div class="input-item name">
        <label for="name-1">Název</label>
        <input id="name-1" name="name" type="text" placeholder="Oprava vozidla">
      </div>
      <div class="input-item price-fix full-width">
        <label for="priceFix-1">Cena - fixní</label>
        <input id="priceFix-1" name="price" type="number">
      </div>
      <div class="input-item price-min">
        <label for="priceMin-1">Cena - minimální</label>
        <input id="priceMin-1" name="minPrice" type="number">
      </div>
      <div class="input-item price-max">
        <label for="priceMax-1">Cena - maximální</label>
        <input id="priceMax-1" name="maxPrice" type="number">
      </div>
      <div class="input-item price-desc full-width">
        <label for="priceDesc-1">Cena - popis</label>
        <input id="priceDesc-1" name="description" type="text" placeholder="Cena na vyžádání podle velikosti a typu.">
      </div>
    </div>
  </div>
</div>
*/ ?>

<div id="organization-location-1" class="group-wrap location last-group" data-group-index="1">
  <h2 class="group-name">Místo #1</h2>
  <div class="inputs-outer-wrap">
    <div class="inputs-wrap">
      <div class="input-item">
        <label for="locationName-1">Název místa</label>
        <input id="locationName-1" name="name" type="text">
      </div>
      <div class="input-item">
        <label for="streetAddress-1">Ulice</label>
        <input id="streetAddress-1" name="streetAddress" type="text">
      </div>
      <div class="input-item">
        <label for="addressRegion-1">Město</label>
        <input id="addressRegion-1" name="addressRegion" type="text">
      </div>
      <div class="input-item">
        <label for="postalCode-1">PSČ</label>
        <input id="postalCode-1" name="postalCode" type="text">
      </div>
      <div class="input-item">
        <label for="addressLocality-1">Lokalita (Královo pole, Žižkov)</label>
        <input id="addressLocality-1" name="addressLocality" type="text">
      </div>
      <div class="input-item">
        <label for="addressCountry-1">Stát</label>
        <input id="addressCountry-1" name="addressCountry" type="text">
      </div>
      <div class="input-item full-width">
        <label for="hasMap-1">Odkaz na mapu</label>
        <input id="hasMap-1" name="hasMap" type="text">
      </div>
      <div class="input-item">
        <label for="latitude-1">GPS latitude</label>
        <input id="latitude-1" name="latitude" type="text">
      </div>
      <div class="input-item">
        <label for="longitude-1">GPS longitude</label>
        <input id="longitude-1" name="longitude" type="text">
      </div>
    </div>

    <div id="organization-hours-1-1" class="group-wrap sub opening-hours last-group" data-group-index="1">
    <h3 class="sub-group-name">Otevírací doba #1</h3>
      <div class="sub-inputs-outer-wrap">
        <div class="inputs-wrap">
          <div class="full-width input-item">
            Zvolte dny, pro které platí následující nastavení
          </div>
          <div class="input-item days">
            <div class="inner-input-wrap">
              <input type="checkbox" name="Monday" id="monday-1-1">
              <label for="monday-1-1">Pondělí</label>
            </div>
            <div class="inner-input-wrap">
              <input type="checkbox" name="Tuesday" id="tuesday-1-1">
              <label for="tuesday-1-1">Úterý</label>
            </div>
            <div class="inner-input-wrap">
              <input type="checkbox" name="Wednesday" id="wednesday-1-1">
              <label for="wednesday-1-1">Středa</label>
            </div>
            <div class="inner-input-wrap">
              <input type="checkbox" name="Thursday" id="thursday-1-1">
              <label for="thursday-1-1">Čtvrtek</label>
            </div>
            <div class="inner-input-wrap">
              <input type="checkbox" name="Friday" id="friday-1-1">
              <label for="friday-1-1">Pátek</label>
            </div>
            <div class="inner-input-wrap">
              <input type="checkbox" name="Saturday" id="saturday-1-1">
              <label for="saturday-1-1">Sobota</label>
            </div>
            <div class="inner-input-wrap">
              <input type="checkbox" name="Sunday" id="sunday-1-1">
              <label for="sunday-1-1">Neděle</label>
            </div>
          </div>
          <div class="input-item opens-wrap">
            <label for="opens-1-1">Otevírá</label>
            <input id="opens-1-1" name="opens" type="time">
          </div>
          <div class="input-item closes-wrap">
            <label for="opens-1-1">Zavírá</label>
            <input id="opens-1-1" name="opens" type="time" class="closes">
          </div>
          <div class="input-item">
            <div class="inner-input-wrap">
              <label for="closed-1-1">Zavřeno</label>
              <input id="closed-1-1" name="closed" type="checkbox" class="closed">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div id="organization-contactPoint-1" class="group-wrap contact-point last-group" data-group-index="1">
  <h2 class="group-name">Kontaktní bod #1</h2>
  <div class="inputs-outer-wrap">
    <div class="inputs-wrap">
      <div class="input-item phone">
        <label for="telephone-1">Telefon</label>
        <input id="telephone-1" name="telephone" type="tel">
      </div>
      <div class="input-item email">
        <label for="email-1">E-mail</label>
        <input id="email-1" name="email" type="email">
      </div>
      <div class="input-item place-type">
        <label for="contactType-1">Typ místa (customer service, HR, ...)</label>
        <input id="contactType-1" name="contactType" type="text">
      </div>
      <div class="input-item last-input language" data-input-index="1">
        <label for="availableLanguage">Jazyky (více jazyků oddělte čárkou)</label>
        <input id="availableLanguage" name="availableLanguage" type="text" placeholder="Czech, English, German">
      </div>
    </div>
  </div>
</div>

<div class="btns-wrap">
  <span id="organization-btn" class="btn generate-btn">Vygeneruj</span>
</div>

<div class="final-code-wrap">
	<div class="copy-btn">
		<img src="copy.svg" alt="Kopírovat" width="26" height="26">
		<span class="copy-text">Zkopírováno</span>
	</div>
  <label for="organization-result">Výsledný kód</label>
  <textarea id="organization-result" name="organization-result"></textarea>
</div>