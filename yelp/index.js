
// example to load a json file(not require a callback
// var url = 'http://yoursite.com/data/users.json';
// var j = [];
// $.ajax({
//     type: 'GET',
//     url: url,
//     dataType: 'json',
//     success: function(data) { j = data;},
//     async: false
// });
//
// alert(j.Users[0].Name);



// latitude,longitude to json values
// var lat = position.coords.latitude;
// var long = position.coords.longitude;
// var nooGmapL10n={"lottitude": lat,"longitude": long};
// var jsonData = JSON.stringify(nooGmapL10n);



//sample request cll=latitude,longitude
// https://api.yelp.com/v2/search?term=cream+puffs&location=San+Francisco
// https://api.yelp.com/v2/search?term=german+food&location=Hayes&cll=37.77493,-122.419415



//curl example.

// error_reporting(E_ALL);
// ini_set('display_errors', 1);
//
//basic curl examples-----------------/
// 1.  initialize;
// $ch = curl_init();
//
// 2. set options
// url to send the requestto
// curl_setopt($ch, CURLOPT_URL,'http://www.google.com');
//
// return instead of outputting directly
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//
// wether to include the header in the output. set to false here
// curl_setopt($ch, CURLOPT_HEADER, 0);
//
// 3. execute the request and fetch the response. check for errors
// $output = curl)exec($ch);
//
// if($output === FALSE){
//     cho"cURL Error: " . curl_error($ch);
// }
//
// 4. close and free up the curl click_handle
// curl_close($ch);
//
// 5.display raw output
// print_r($output);
//
// POST data with curl -------------------------------/
//basic setup
// $url = 'http://miscellaneous-115933.nitrouseapp.com:3000/curl/output.php;';
// $post_data = array(
//     'query' =>'some stuff',
//     'method' => 'post',
//     'ya' => 'hoo,'
// );
//
// 2.initialize
// $ch = curl_init();
//
// 3.set options
// URL to submit to
// curl_setopt($ch,CURLOPT_URL, $url);
//
// Return output instead of outputting it
// curl_setopt($ch,CURLOPT_RETURNTRANSFER, 1);
//
// we are doing a post request
// curl_setopt($ch,CURLOPT_POST, 1);
//
// adding the post variables to the request
// curl_setopt($ch,CURLOPT_POSTFIELDS, $post_data);
//
// 3.execute the requst and fetch the response. check for errors
// $output = curl_exec($ch);
//
// if($output === FALSE){
//     echo " cURL ERROR " . curl_error($ch);
// }
//
// 4. close and free up the curl click_handle
// curl_close($ch);
//
// 5.display raw output
// print_r($output);

















