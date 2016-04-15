"use strict";

var OzBonds = (function() {
  // Private members:
  var _incomeField;
  var _incomeFieldGroup;
  var _durationField;
  var _durationFieldGroup;
  var _outputDiv;
  var _bondPrices;
  var audPrice = new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true
  });
  var percent = new Intl.NumberFormat("en-AU", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  var ausDate = new Intl.DateTimeFormat("en-AU");

  // Public functions:
  function init(incomeField, incomeFieldGroup, durationField, durationFieldGroup, outputDiv) {
    _incomeField = incomeField;
    _incomeFieldGroup = incomeFieldGroup;
    _durationField = durationField;
    _durationFieldGroup = durationFieldGroup;
    _outputDiv = outputDiv;
  }
  
  function setBondPrices(bondPrices) {
    // Take list of bonds and group by year, sort by yield descending.
    // We will use the highest-yield bond available to provide income each year.
    _bondPrices = {};
    bondPrices.forEach(function(bond) {
      _bondPrices[bond.maturity.getFullYear()] = _bondPrices[bond.maturity.getFullYear()] || [];
      _bondPrices[bond.maturity.getFullYear()].push(bond);
    });
    for (var year in _bondPrices) {
      _bondPrices[year].sort(function(b1,b2) { return b2.yield - b1.yield; });
    }
  }

  function buildLadderButton() {
    _outputDiv.fadeOut(200);
    var annualAmount = parseInt(_incomeField.val().replace(/,/g, ""), 10);
    var years = parseInt(_durationField.val(), 10);
    if (!Number.isInteger(annualAmount) || annualAmount <= 0) {
      _incomeFieldGroup.addClass("has-error");
      console.log("Invalid annual amount:", _incomeField.val());
      return false;
    } else {
      _incomeFieldGroup.removeClass("has-error");
    }
    if (!Number.isInteger(years) || years <= 0) {
      _durationFieldGroup.addClass("has-error");
      console.log("Invalid number of years amount:", _durationField.val());
      return false;
    } else {
      _durationFieldGroup.removeClass("has-error");
    }
    console.log("Input valid. Building ladder targeting $", annualAmount, "/year for", years, "years");
    var ladder = buildLadder(annualAmount, years);
    displayLadder(ladder);
    return false;
  }

  // Private functions:

  var couponsForYear = (function() {
    var thisYear = new Date().getFullYear();
    return function(bond, year) {
      if (year == thisYear) {
        // TODO No coupons should be paid before now.
        return bond.coupon*bond.face;
      } else if (year == bond.maturity.getFullYear()) {
        // TODO No coupons should be paid after maturity.
        return bond.coupon*bond.face;
      } else {
        return bond.coupon*bond.face;
      }
    }
  })();

  function buildLadder(annualAmount, years) {
    var thisYear = new Date().getFullYear();
    var finalYear = thisYear + years;
    var ladder = {
      purchases: [],
      cashflows: [],
      totalCost: 0,
      totalIncome: 0,
      thisYear: thisYear,
    };
    var amountNeeded = {};
    for (var year = thisYear; year <= finalYear; year++) {
      amountNeeded[year] = annualAmount;
      ladder.cashflows.push({
        year: year,
        income: 0,
        itemized: [],
      });
    }
    var lastMissingYear = 0;
    for (var year = finalYear; year >= thisYear; year--) {
      if (_bondPrices[year] && _bondPrices[year].length > 0) {
        var bond = _bondPrices[year][0];
        var perBond = bond.face + couponsForYear(bond, year);
        var qty = Math.ceil(amountNeeded[year] / perBond);
        var purchase = {
          symbol: bond.symbol,
          maturity: ausDate.format(bond.maturity),
          coupon: percent.format(bond.coupon),
          face: bond.face,
          price: audPrice.format(bond.price),
          qty: qty,
          total: audPrice.format(bond.price*qty),
        };
        ladder.purchases.push(purchase);
        ladder.totalCost += bond.price*qty;


        var cashflowIdx = year - thisYear;
        ladder.cashflows[cashflowIdx].income += qty*perBond;
        ladder.totalIncome += qty*perBond;
        ladder.cashflows[cashflowIdx].itemized.push({
          income: audPrice.format(qty*perBond),
          notes: bond.symbol + " matures",
        });
        if (lastMissingYear != 0) {
          ladder.cashflows[cashflowIdx].notes = "Helps cover years " + year + "-" + lastMissingYear;
        }
        lastMissingYear = 0;
        for (var couponYear = thisYear; couponYear < year; couponYear++) {
          var amountThisYear = couponsForYear(bond, couponYear)*qty;
          amountNeeded[couponYear] -= amountThisYear;
          cashflowIdx = couponYear - thisYear;
          ladder.cashflows[cashflowIdx].income += amountThisYear;
          ladder.cashflows[cashflowIdx].itemized.push({
            income: audPrice.format(amountThisYear),
            notes: bond.symbol + " coupon payments",
          });
          ladder.totalIncome += amountThisYear;
        }
      } else {
        if (lastMissingYear == 0) {
          lastMissingYear = year;
        }
        amountNeeded[year-1] += amountNeeded[year];
      }
    }
    ladder.totalCost = audPrice.format(ladder.totalCost);
    ladder.totalIncome = audPrice.format(ladder.totalIncome);
    for (var year = 0; year <= finalYear - thisYear; year++) {
      ladder.cashflows[year].income = audPrice.format(ladder.cashflows[year].income);
    }
    return ladder;
  }

  function displayLadder(ladder) {
    _outputDiv.html(Handlebars.templates["ladderDetails.html"](ladder));
    _outputDiv.fadeIn(400);
  }

  return {
    init: init,
    buildLadderButton: buildLadderButton,
    setBondPrices: setBondPrices,
  };
})();

var eTIBs = (function() {
  function getPrices() {
    // TODO: Obtain price data dynamically from the ASX.
    // Pricing data and term sheets obtained from:
    // http://www.asx.com.au/asx/markets/interestRateSecurityPrices.do?type=GOVERNMENT_BOND
    // http://australiangovernmentbonds.gov.au/etibs/list-of-etibs/
 
    return [
        {
          symbol: "GSIU18",
          maturity: new Date(2018,11,21),
          coupon: 0.01,
          face: 104.650,
          price: 106.130,
          yield: -0.01294,
        },
        {
          symbol: "GSIO20",
          maturity: new Date(2020,8,20),
          coupon: 0.04,
          face: 164.100,
          price: 190.585,
          yield: -0.11652,
        },
        {
          symbol: "GSIC22",
          maturity: new Date(2022,2,21),
          coupon: 0.0125,
          face: 108.700,
          price: 114.080,
          yield: -0.01070,
        },
        {
          symbol: "GSIQ25",
          maturity: new Date(2025,9,20),
          coupon: 0.03,
          face: 117.080,
          price: 143.363,
          yield: -0.01304,
        },
        {
          symbol: "GSIQ30",
          maturity: new Date(2030,9,20),
          coupon: 0.025,
          face: 114.220,
          price: 140.550,
          yield: -0.00251,
        },
        {
          symbol: "GSIQ35",
          maturity: new Date(2035,8,21),
          coupon: 0.02,
          face: 105.860,
          price: 125.160,
          yield: 0.00644,
        },
        {
          symbol: "GSIQ40",
          maturity: new Date(2040,8,21),
          coupon: 0.0125,
          face: 101.590,
          price: 106.552,
          yield: 0.00969,
        },
    ];
  }

  return {
    getPrices: getPrices,
  };
})();
