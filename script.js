$(document).ready(function(){
	$('.tab-btn').click(function(){
		let tabId = $(this).attr('data-tab-id');
		$('.tab-btn').removeClass('active');
    $('.group-wrap.open').find($('.group-name')).click();
		$(this).addClass('active');
		$('.tab-item').removeClass('active');
		$('#'+tabId).addClass('active');
    $('#'+tabId).find($('.group-wrap:first-child .group-name')).click();
	})

  $('body').on('click', '.group-name', function(){
    $(this).parent().toggleClass('open');
    $(this).parent().find('.inputs-outer-wrap').slideToggle();
  });

  $('body').on('click', '.sub-group-name', function(){
    $(this).parent().toggleClass('open');
    $(this).parent().find('.sub-inputs-outer-wrap').slideToggle();
  });

	$('.copy-btn').click(function(){
		copyResult();
	});

	$('#organization-main .group-name').click();

  $('#organization-logo').on('change', 'input', function(){
    if($(this).parent().hasClass('last-input')){
      makeNewInput({
        parentId: 'organization-logo',
        fullWidth: true,
        inputName: 'logo',
        nameForPeople: 'Logo URL',
        type: 'text'
      });

      $(this).parent().removeClass('last-input');
    }
  })

  $('#organization').on('change', 'input.language', function(){
    if($(this).parent().hasClass('last-input')){
      makeNewInput({
        parentId: $(this).closest('.group-wrap').attr('id'),
        fullWidth: false,
        inputName: 'availableLanguage',
        nameForPeople: 'Jazyk',
        type: 'text',
        addClass: 'language'
      });

      $(this).parent().removeClass('last-input');
    }
  })

  $('#organization-web').on('change', 'input', function(){
    if($(this).parent().hasClass('last-input')){
      makeNewInput({
        parentId: 'organization-web',
        fullWidth: true,
        inputName: 'other-url',
        nameForPeople: 'Další URL (Facebook, Instagram, ...)',
        type: 'text',
        addClass: 'other-urls'
      });

      $(this).parent().removeClass('last-input');
    }
  })

  $('#organization').on('change', '.last-group.opening-hours input', function() {
    const parentGroupElement = $(this).closest('.group-wrap.location');
    const parentGroupIndex = parentGroupElement.attr('data-group-index');

    copyGroup({
      groupItem: '.opening-hours.last-group',
      groupId: 'organization-hours',
      addClass: 'opening-hours sub',
      headerName: 'Otevírací doba',
      parentGroup: parentGroupElement,
      parentGroupName: 'organization-location',
      parentGroupIndex: parentGroupIndex
    });
  });

  $('#organization').on('change', '.last-group.location input', function(){
    copyGroup({
      groupItem: '.location.last-group',
      groupId: 'organization-location',
      addClass: 'location',
      headerName: 'Místo'
    });
  })

  $('#organization').on('change', '.last-group.contact-point input', function(){
    copyGroup({
      groupItem: '.contact-point.last-group',
      groupId: 'organization-contactPoint',
      addClass: 'contact-point',
      headerName: 'Kontaktní bod'
    });

		const parentGroupCont = $(this).closest('.group-wrap.contact-point');

		if(parentGroupCont.hasClass('listed')==false) {
			parentGroupCont.addClass('listed');
		}
  })

  $('#organization').on('change', '.last-group.offer input', function(){
    copyGroup({
      groupItem: '.last-group.offer',
      groupId: 'organization-offers',
      addClass: 'offer',
      headerName: 'Produkty / Služby'
    });

		const parentGroupCont = $(this).closest('.group-wrap.offer');

		if(parentGroupCont.hasClass('listed')==false) {
			parentGroupCont.addClass('listed');
		}
  })

  $('#organization-btn').click(function(){
    generateOrganizationSchema();
  })

	$('.import-btn').click(function(){
		icoNumber = prompt('Vložte IČO:');
		const url = 'https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/' + icoNumber;

		fetch(url)
	  .then(response => {
	    if (!response.ok) {
	      throw new Error('Network response was not ok');
	    }
	    return response.json();
	  })
	  .then(data => {
			let dateOfOrigin = data.datumVzniku; // 2012-09-06 format
			dateOfOrigin = dateOfOrigin.split('-'); // make an array
			dateOfOrigin = dateOfOrigin[0]; // get first element
			$('#foundingDate').val(dateOfOrigin);

			let vatNumber = data.dic;
			$('#vatID').val(vatNumber);

			let legalName = data.obchodniJmeno;
			$('#legalName').val(legalName);

			let countryCode = data.sidlo.kodStatu;
			$('#addressCountry-main').val(countryCode);

			let localityName = data.sidlo.nazevCastiObce;
			$('#addressLocality-main').val(localityName);

			let cityName = data.sidlo.nazevObce;
			$('#addressRegion-main').val(cityName);

			let postalCode = data.sidlo.psc;
			$('#postalCode-main').val(postalCode);

			let streetName = data.sidlo.textovaAdresa;
			streetName = streetName.replace(/, /g, ',').split(',');
			streetName = streetName[0];
			if(streetName.indexOf('č.p.') > -1) {
				streetName = streetName.replace('č.p.', cityName);
			}
			$('#streetAddress-main').val(streetName);

			$('#organization-address').find('.group-name').click();
	  })
	  .catch(error => {
	    console.error('There was a problem with the fetch operation:', error);
	  });
	})
});




/*
{
  parentId: 'organization-logo',
  fullWidth: true,
  inputName: 'logo',
  nameForPeople: 'Logo URL',
  type: 'text',
  addClass: 'language'
}
*/

function makeNewInput(object) {
	let inputIndex = $('#'+object.parentId).find($('.last-input')).attr('data-input-index');
  inputIndex++;

  let addedClass = ' last-input ';
  addedClass = object.fullWidth ? addedClass + 'full-width ' : addedClass;

  let inputClass = object.addClass ? object.addClass : '';

  let newInputElement = '<div class="input-item '+addedClass+'" data-input-index="'+inputIndex+'">';
  newInputElement += '<label for="'+object.inputName+'-'+inputIndex+'">'+object.nameForPeople+' #'+inputIndex+'</label>';
  newInputElement += '<input id="'+object.inputName+'-'+inputIndex+'" name="'+object.inputName+'-'+inputIndex+'" type="'+object.type+'" class="'+inputClass+'">';
  newInputElement += '</div>';

  $('#'+object.parentId).find('.inputs-wrap').append(newInputElement);
}


/*
  {
    groupItem: '.opening-hours.last-group',
    groupId: 'organization-hours',
    addClass: 'opening-hours',
    headerName: 'Otevírací doba',
    parentGroup: '.group-wrap.location',
    parentGroupName: 'organization-location',
    parentGroupIndex: $(this).closest('.group-wrap.location').attr('data-group-index')
    extraFunction: function(){doSomething()}
  }
 */
function copyGroup(object) {
  let headerClass = object.parentGroupIndex ? '.sub-group-name' : '.group-name';
  let parentElement;
  let groupIndex;

  if (object.parentGroup) {
    parentElement = $('#' + object.parentGroupName + '-' + object.parentGroupIndex);
    groupIndex = parentElement.find(object.groupItem).attr('data-group-index');
  } else {
    groupIndex = $(object.groupItem).attr('data-group-index');
  }


  let newGroupIndex = Number(groupIndex) + 1;

  let newGroupId = object.groupId;
  newGroupId += object.parentGroupIndex ? '-' + object.parentGroupIndex : '';
  newGroupId += '-' + newGroupIndex;

  let addedClass = 'group-wrap last-group open ' + object.addClass;

  let newGroup;
  if(object.parentGroup) {
    newGroup = $('#'+object.parentGroupName+'-'+object.parentGroupIndex).find(object.groupItem).clone();
  } else {
    newGroup = $(object.groupItem).clone();
  }

  newGroup.attr('class', addedClass);
  newGroup.attr('id', newGroupId);
  newGroup.attr('data-group-index', newGroupIndex);
  newGroup.find(headerClass).text(object.headerName + ' #' + newGroupIndex);

  if(newGroup.hasClass('sub')) {
    newGroup.find('input').each(function(){
      $(this).val('');
      $(this).prop('checked', false);
      let idAsArray = $(this).attr('id').split('-');
      $(this).attr('id', idAsArray[0] + '-' + idAsArray[1] + '-' + (Number(idAsArray[2]) + 1));
    });
    newGroup.find('label').each(function(){
      let idAsArray = $(this).attr('for').split('-');
      $(this).attr('for', idAsArray[0] + '-' + idAsArray[1] + '-' + (Number(idAsArray[2]) + 1));
    });
  } else {
    newGroup.find('input, select').each(function(){
      if($(this)[0].nodeName != 'SELECT') {
        $(this).val('');
      }
      $(this).prop('checked', false);

      let $idOnlyLetters = $(this).attr('id').replace(/[^a-zA-Z]+/g, '');
      $(this).attr('id', $idOnlyLetters + '-' + newGroupIndex);
    });
    newGroup.find('label').each(function(){
      let $idOnlyLetters = $(this).attr('for').replace(/[^a-zA-Z]+/g, '');
      $(this).attr('for', $idOnlyLetters + '-' + newGroupIndex);
    });
  }
  newGroup.find('.group-wrap.sub').each(function(){
    if($(this).attr('data-group-index') == 1) {
      let idAsArray = $(this).attr('id').split('-');
      let subIdSuffix = (Number(idAsArray[2]) + 1) + '-1';
      $(this).attr('id', idAsArray[0] + '-' + idAsArray[1] + '-' + subIdSuffix);
      $(this).attr('data-group-index', '1');
      $(this).addClass('last-group');
      $(this).find('input').each(function(){
        $(this).attr('id', $(this).attr('id') + '-1');
      });
      $(this).find('label').each(function(){
        $(this).attr('for', $(this).attr('for') + '-1');
      });
    } else {
      $(this).remove();
    }
  })

  /*if(object.parentGroup) {
    newGroup.insertAfter($('#'+object.parentGroupName+'-'+object.parentGroupIndex).find(object.groupItem));
  } else {
    newGroup.insertAfter($(object.groupItem));
  }*/

  if (object.parentGroup) {
    newGroup.insertAfter(parentElement.find(object.groupItem).last());
  } else {
    newGroup.insertAfter($(object.groupItem).last());
  }

  let oldLastGroup = object.parentGroupIndex ? '#'+object.groupId+'-'+object.parentGroupIndex+'-'+groupIndex : '#'+object.groupId+'-'+groupIndex;

  $(oldLastGroup).removeClass('last-group');

  if(object.extraFunction) {
    object.extraFunction();
  }
}

function copyResult() {
  let copyText = $('#organization-result').val();

  navigator.clipboard.writeText(copyText).then(() => {
		$('.copy-text').addClass('visible');
		setTimeout(function(){
			$('.copy-text').removeClass('visible');
		}, 800);
	});
}

function generateOrganizationSchema() {
  let organizationMainArray = [];
	let organizationAddressArray = [];
  let organizationLogoArray = [];
  let organizationOtherUrlsArray = [];
  let organizationOffersArray = [];
  let organizationLocationArray = [];
  let organizationContactPointArray = [];

	let result = '<script type="application/ld+json">\n';
	result += '{\n';
  result += '"@context": "https://schema.org",\n';
  result += '"@type": "LocalBusiness",\n';

  $('#organization-main input').each(function(){
    if($(this).val().length > 0) {
      const key = $(this).attr('name');
      const value = $(this).val();
      organizationMainArray.push(
        {
          type: key,
          value: value
        }
      );
    }
  })

  if(organizationMainArray.length > 0) {
    organizationMainArray.forEach((element, index) => {
      if(index > 0) {
        result += ',\n';
      }
      result += '"'+element.type+'": "'+element.value+'"';
    });
  }

	$('#organization-address input').each(function(){
    if($(this).val().length > 0) {
      const key = $(this).attr('name');
      const value = $(this).val();
			organizationAddressArray.push(
        {
          type: key,
          value: value
        }
      );
    }
  })

	if(organizationAddressArray.length > 0) {
		result += ',\n"address":{\n';
		result += '"@type":"PostalAddress",\n';

    organizationAddressArray.forEach((element, index) => {
      if(index > 0) {
        result += ',\n';
      }
      result += '"'+element.type+'": "'+element.value+'"';
    });

		result += '\n}';
  }

  $('#organization-logo input').each(function(){
    if($(this).val().length > 0) {
      const value = $(this).val();
      organizationLogoArray.push(value);
    }
  })

  if(organizationLogoArray.length > 1) {
    result += ',\n';
    result += '"image": "' + organizationLogoArray[0] + '",\n';
    result += '"logo: [\n';
    organizationLogoArray.forEach((element, index) => {
      if(index > 0) {
        result += ',\n';
      }
      result += element;
    });
    result += '\n]';
  } else if (organizationLogoArray.length > 0){
    result += ',\n';
    result += '"image": "' + organizationLogoArray[0] + '",\n';
    result += '"logo": "' + organizationLogoArray[0] + '"';
  }

  if($('#organization-web #url').val().length > 0) {
    result += ',\n';
    result += '"url": "' + $('#organization-web #url').val() + '"';
  }

  $('#organization-web input.other-urls').each(function(){
    if($(this).val().length > 0) {
      const value = $(this).val();
      organizationOtherUrlsArray.push(value);
    }
  })

  if(organizationOtherUrlsArray.length > 1) {
    result += ',\n';
		result += '"sameAs": [\n';
    organizationOtherUrlsArray.forEach((element, index) => {
      if(index > 0) {
        result += ',\n';
      }
			result += '"' + element + '"';
    });
    result += '\n]';
  } else if (organizationOtherUrlsArray.length > 0){
    result += ',\n';
    result += '"sameAs": "' + organizationOtherUrlsArray[0] + '"';
  }

  if($('#organization-info #specialty').val().length > 0) {
    let specialty = $('#organization-info #specialty').val().replace(/, /g, ',');
    let specialtyArray = specialty.split(',');

    console.log($('#organization-info #specialty').val());
    console.log(specialty);
    console.log(specialtyArray);

    if(specialtyArray.length > 1) {
      result += ',\n"specialty": ["' + specialtyArray.join('", "') + '"]';
    } else {
      result += ',\n"specialty": "' + specialtyArray[0] + '"';
    }
  }

  if($('#organization-info #paymentAccepted').val().length > 0) {
    let paymentAccepted = $('#organization-info #paymentAccepted').val().replace(/, /g, ',');
    let paymentAcceptedArray = paymentAccepted.split(',');

    if(paymentAcceptedArray.length > 1) {
      result += ',\n"paymentAccepted": ["' + paymentAcceptedArray.join('", "') + '"]';
    } else {
      result += ',\n"paymentAccepted": "' + paymentAcceptedArray[0] + '"';
    }
  }

  if($('#organization-info #awards').val().length > 0) {
    let awards = $('#organization-info #awards').val().replace(/, /g, ',');
    let awardsArray = awards.split(',');

    if(awardsArray.length > 1) {
      result += ',\n"awards": ["' + awardsArray.join('", "') + '"]';
    } else {
      result += ',\n"awards": "' + awardsArray[0] + '"';
    }
  }

  if($('#organization-info #priceRange').val().length > 0) {
    result += ',\n"priceRange": "' + $('#organization-info #priceRange').val() + '"';
  }

  if($('#organization-info #amenityFeature').val().length > 0) {
    let amenityFeature = $('#organization-info #amenityFeature').val().replace(/, /g, ',');
    let amenityFeatureArray = amenityFeature.split(',');

    if(amenityFeatureArray.length > 1) {
      result += ',\n"amenityFeature": [\n';

      amenityFeatureArray.forEach((e, i) => {
        if(i > 0) {
          result += ',\n';
        }
        result += '{\n'
        result += '"@type": "LocationFeatureSpecification",\n';
        result += '"name": "' + e + '",\n';
        result += '"value": true\n';
        result += '}';
      });
      result += '\n]';
    } else {
      result += ',\n"amenityFeature": {\n';
      result += '"@type": "LocationFeatureSpecification",\n';
      result += '"name": "' + amenityFeatureArray[0] + '",\n';
      result += '"value": true\n';
      result += '}';
    }
  }

  $('.group-wrap.offer.listed').each(function(i, e) {
		organizationOffersArray.push({});
		$(this).find('input, select').each(function(){
	    if($(this).val().length > 0) {
	      const key = $(this).attr('name');
	      const value = $(this).val();
				organizationOffersArray[i][key] = value;
	    }
	  })
	});

  console.log(organizationOffersArray);

  if(organizationOffersArray.length > 0) {
		result += ',\n"offers": [\n';

		organizationOffersArray.forEach((element, index) => {
			const offerType = element.type;
      const offerName = element.name;
		  const offerPriceFix = element.price;
		  const offerPriceMin = element.minPrice;
      const offerPriceMax = element.maxPrice;
      const offerPriceDesc = element.description;

	    if(index > 0) {
	      result += ',\n';
	    }
			result += '{\n';
	    result += '"@type": "Offer"\n';
      result += '"itemOffered": {\n';
      result += '"@type": "'+offerType+'"';
			result += offerName ? ',\n"name": "' + offerName + '"' : '';
      result += '\n}';

      if(offerPriceFix) {
        result += ',\n"price": "' + offerPriceFix + ' CZK"';
      } else if(offerPriceMin || offerPriceMax) {
        result += ',\n"priceSpecification": {\n';
        result += '"@type": "PriceSpecification",\n';
        result += '"priceCurrency": "CZK"';
        result += offerPriceMin ? ',\n"minPrice": "' + offerPriceMin + '"' : '';
        result += offerPriceMax ? ',\n"minPrice": "' + offerPriceMax + '"' : '';
        result += '\n}';
      } else if(offerPriceDesc) {
        result += ',\n"description": "' + offerPriceDesc + '"';
      }

			result += '\n}';
	  });

		result += '\n]';
	};

  $('.group-wrap.location').each(function(i, e) {
    const locationGroupId = $(this).attr('data-group-index')
    const locationName = $(this).find('#locationName-'+locationGroupId).val();

    if(locationName.length > 0) {
			organizationLocationArray.push({info: {}, hours: []});
      $(this).find('.inputs-outer-wrap > .inputs-wrap > .input-item > input').each(function(){
        if($(this).val().length > 0) {
          const key = $(this).attr('name');
          const value = $(this).val();
					organizationLocationArray[i]['info'][key] = value;
        }
      })
    }

		$(this).find('.opening-hours').each(function(ii, ee) {
			let innerDays = [];
			$(this).find('.input-item.days input').each(function(){
				if($(this).is(':checked')) {
					innerDays.push($(this).attr('name'));
				}
			})

			if (innerDays.length > 0) {
				let openTime = $(this).find('.input-item.opens-wrap input').val();
        let closeTime = $(this).find('.input-item.closes-wrap input').val();

        if($(this).find('.closed').is(':checked')) {
          openTime = 'closed';
          closeTime = 'closed';
        }

				if (!organizationLocationArray[i]) {
					organizationLocationArray[i] = { hours: [] };
				}

				if (!Array.isArray(organizationLocationArray[i]['hours'])) {
				 	organizationLocationArray[i]['hours'] = [];
				}

				organizationLocationArray[i]['hours'].push({days: innerDays});
				organizationLocationArray[i]['hours'][ii]['opens'] = openTime;
				organizationLocationArray[i]['hours'][ii]['closes'] = closeTime;
			}
		})
  })

	if(organizationLocationArray.length > 0) {
		result += ',\n"location":[\n';
		organizationLocationArray.forEach((e, i) => {
			const locationCity = organizationLocationArray[i]['info']['addressRegion'] ? organizationLocationArray[i]['info']['addressRegion'] : '';
	    const locationStreet = organizationLocationArray[i]['info']['streetAddress'] ? organizationLocationArray[i]['info']['streetAddress'] : '';
	    const locationLocality = organizationLocationArray[i]['info']['addressLocality'] ? organizationLocationArray[i]['info']['addressLocality'] : '';
	    const locationPostalCode = organizationLocationArray[i]['info']['postalCode'] ? organizationLocationArray[i]['info']['postalCode'] : '';
	    const locationCountry = organizationLocationArray[i]['info']['addressCountry'] ? organizationLocationArray[i]['info']['addressCountry'] : '';

	    const locationLatitude = organizationLocationArray[i]['info']['latitude'] ? organizationLocationArray[i]['info']['latitude'] : '';
	    const locationLongitude = organizationLocationArray[i]['info']['longitude'] ? organizationLocationArray[i]['info']['longitude'] : '';
	    const locationMap = organizationLocationArray[i]['info']['hasMap'] ? organizationLocationArray[i]['info']['hasMap'] : '';

			if(i > 0) {
        result += ',\n';
      }
			result += '{\n';
      result += '"@type": "Place"';
			result += ',\n"name":"' + organizationLocationArray[i]['info']['name'] + '"';

			if(locationCity) {
        result += ',\n"address":{\n';
        result += '"@type":"PostalAddress"';
        result += locationCity ? ',\n"addressRegion":"'+ locationCity +'"' : '';
        result += locationStreet ? ',\n"streetAddress":"'+ locationStreet +'"' : '';
        result += locationLocality ? ',\n"addressLocality":"'+ locationLocality +'"' : '';
        result += locationPostalCode ? ',\n"postalCode":"'+ locationPostalCode +'"' : '';
        result += locationCountry ? ',\n"addressCountry":"'+ locationCountry +'"' : '';
        result += '\n}';
      }

			if(locationLatitude || locationLongitude) {
        result += ',\n"geo":{\n';
        result += '"@type":"GeoCoordinates"';
        result += locationLatitude ? ',\n"latitude":"'+ locationLatitude +'"' : '';
				result += locationLongitude ? ',\n"longitude":"'+ locationLongitude +'"' : '';
        result += '\n}';
      }

			result += locationMap ? ',\n"hasMap":"' + locationMap + '"' : '';


			if(organizationLocationArray[i]['hours'].length > 0) {
				result += ',\n"openingHoursSpecification": [';
				organizationLocationArray[i]['hours'].forEach((ee, ii) => {
					if(ii > 0) {
            result += ',\n';
          }
          result += '{\n';
          result += '"@type": "OpeningHoursSpecification",\n';
					result += '"dayOfWeek": ["' + organizationLocationArray[i]['hours'][ii].days.join('", "') + '"],\n';
					result += '"opens": "' + organizationLocationArray[i]['hours'][ii].opens + '",\n';
					result += '"closes": "' + organizationLocationArray[i]['hours'][ii].closes + '"\n';
          result += '}';
				});
				result += '\n]'
			}
			result += '\n}';
		});
		result += '\n]';
	}


	$('.group-wrap.contact-point.listed').each(function(i, e) {
		organizationContactPointArray.push({});
		$(this).find('input').each(function(){
	    if($(this).val().length > 0) {
	      const key = $(this).attr('name');
	      const value = $(this).val();
				organizationContactPointArray[i][key] = value;
	    }
	  })
	});

	if(organizationContactPointArray.length > 0) {
		result += ',\n"contactPoint": [\n';

		organizationContactPointArray.forEach((element, index) => {
			const cpPhone = element.telephone;
		  const cpMail = element.email;
		  const cpType = element.contactType;
			let cpLanguages = element.availableLanguage;

	    if(index > 0) {
	      result += ',\n';
	    }
			result += '{\n';
	    result += '"@type": "ContactPoint"';
			result += cpPhone ? ',\n"telephone": "' + cpPhone + '"' : '';
	    result += cpMail ? ',\n"email": "' + cpMail + '"' : '';
	    result += cpType ? ',\n"contactType": "' + cpType + '"' : '';

			if(cpLanguages) {
	    	cpLanguages = cpLanguages.replace(/ /g, '');
	      let cpLanguagesArray = cpLanguages.split(',');

				if(cpLanguagesArray.length > 1) {
					result += ',\n"availableLanguage": ["' + cpLanguagesArray.join('", "') + '"]';
				} else {
					result += ',\n"availableLanguage": "' + cpLanguagesArray[0] + '"';
				}
	    }
			result += '\n}';
	  });

		result += '\n]';
	}

	result += '\n}';
	result += '\n</script>';

	$('#organization-result').val(result);
}
