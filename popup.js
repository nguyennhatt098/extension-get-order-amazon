// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  document.getElementById('test').innerHTML = 'Paragraph changed!';
  // const response = await fetch('https://sellercentral.amazon.com/orders-api/search?limit=15&offset=0&sort=ship_by_asc&date-range=last-7&fulfillmentType=mfn&orderStatus=unshipped&shipByDate=all&forceOrdersTableRefreshTrigger=false');
  // var data = await response.json();
 start();
  let color = element.target.value;
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
};

async function start() {
  const response = await fetch('https://sellercentral.amazon.com/orders-api/search?limit=15&offset=0&sort=ship_by_asc&date-range=last-7&fulfillmentType=mfn&orderStatus=unshipped&shipByDate=all&forceOrdersTableRefreshTrigger=false',);
     var data = await response.json();
     var test= JSON.stringify(data);
     var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://localhost:44301/api/Values/post',true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));

     document.getElementById('test').innerHTML= test ;
     }
    