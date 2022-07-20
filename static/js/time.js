function GetTime() {
  var dt = new Date();
  var def = dt.getTimezoneOffset() / 60;
  var gmt = dt.getHours() + def;
  document.clock.taiwan.value =
    IfZero(dt.getHours()) +
    ":" +
    IfZero(dt.getMinutes()) +
    ":" +
    IfZero(dt.getSeconds());
  var ending = ":" + IfZero(dt.getMinutes()) + ":" + IfZero(dt.getSeconds());

  var time001 = check24(
    gmt + (24 + 8 + 1) > 24 ? gmt + (24 + 8 + 1) - 24 : gmt + (24 + 8 + 3)
  );
  document.clock.time001.value = IfZero(time001) + ending;

  var time002 = check24(
    gmt + (24 + 8) > 24 ? gmt + (24 + 8) - 24 : gmt + (24 + 8)
  );
  document.clock.time002.value = IfZero(time002) + ending;

  var time003 = check24(
    gmt + (24 + 8 + 1) > 24 ? gmt + (24 + 8 + 1) - 24 : gmt + (24 + 8 + 1)
  );
  document.clock.time003.value = IfZero(time003) + ending;

  var time004 = check24(
    gmt + (24 + 8) > 24 ? gmt + (24 + 8) - 24 : gmt + (24 + 8)
  );
  document.clock.time004.value = IfZero(time004) + ending;

  var time005 = check24(
    gmt + (24 + 8) > 24 ? gmt + (24 + 8) - 24 : gmt + (24 + 8)
  );
  document.clock.time005.value = IfZero(time005) + ending;

  var time006 = check24(
    gmt + (24 + 8 - 1) > 24 ? gmt + (24 + 8 - 1) - 24 : gmt + (24 + 8 - 1)
  );
  document.clock.time006.value = IfZero(time006) + ending;

  var time007 = check24(
    gmt + (24 + 8 - 1) > 24 ? gmt + (24 + 8 - 1) - 24 : gmt + (24 + 8 - 1)
  );
  document.clock.time007.value = IfZero(time007) + ending;

  var time008 = check24(
    gmt + (24 + 8) > 24 ? gmt + (24 + 8) - 24 : gmt + (24 + 8)
  );
  document.clock.time008.value = IfZero(time008) + ending;

  var time009 = check24(
    gmt + (24 + 8 - 2) > 24 ? gmt + (24 + 8 - 2) - 24 : gmt + (24 + 8 - 2)
  );
  document.clock.time009.value = IfZero(time009) + ending;

  var time010 = check24(
    gmt + (24 + 8 - 3) > 24 ? gmt + (24 + 8 - 3) - 24 : gmt + (24 + 8 - 3)
  );
  document.clock.time010.value = IfZero(time010) + ending;

  var time011 = check24(
    gmt + (24 + 8 - 1) > 24 ? gmt + (24 + 8 - 1) - 24 : gmt + (24 + 8 - 1)
  );
  document.clock.time011.value = IfZero(time011) + ending;

  var time012 = check24(
    gmt + (24 + 8 - 1) > 24 ? gmt + (24 + 8 - 1) - 24 : gmt + (24 + 8 - 1)
  );
  document.clock.time012.value = IfZero(time012) + ending;

  var time013 = check24(
    gmt + (24 + 8 - 3) > 24 ? gmt + (24 + 8 - 3) - 24 : gmt + (24 + 8 - 3)
  );
  document.clock.time013.value = IfZero(time013) + ending;

  var time014 = check24(
    gmt + (24 + 8 - 3) > 24 ? gmt + (24 + 8 - 3) - 24 : gmt + (24 + 8 - 3)
  );
  document.clock.time014.value = IfZero(time014) + ending;

  var time015 = check24(
    gmt + (24 + 8) > 24 ? gmt + (24 + 8) - 24 : gmt + (24 + 8)
  );
  document.clock.time015.value = IfZero(time015) + ending;

  var time016 = check24(
    gmt + (24 + 8 - 17) > 24 ? gmt + (24 + 8 - 17) - 24 : gmt + (24 + 8 - 17)
  );
  document.clock.time016.value = IfZero(time016) + ending;

  var time017 = check24(
    gmt + (24 + 8 - 11) > 24 ? gmt + (24 + 8 - 11) - 24 : gmt + (24 + 8 - 11)
  );
  document.clock.time017.value = IfZero(time017) + ending;

  var time018 = check24(
    gmt + (24 + 8 - 10) > 24 ? gmt + (24 + 8 - 10) - 24 : gmt + (24 + 8 - 10)
  );
  document.clock.time018.value = IfZero(time018) + ending;

  var time019 = check24(
    gmt + (24 + 8 - 11) > 24 ? gmt + (24 + 8 - 11) - 24 : gmt + (24 + 8 - 11)
  );
  document.clock.time019.value = IfZero(time019) + ending;

  var time020 = check24(
    gmt + (24 + 8 - 14) > 24 ? gmt + (24 + 8 - 14) - 24 : gmt + (24 + 8 - 14)
  );
  document.clock.time020.value = IfZero(time020) + ending;

  var time021 = check24(
    gmt + (24 + 8 - 13) > 24 ? gmt + (24 + 8 - 13) - 24 : gmt + (24 + 8 - 13)
  );
  document.clock.time021.value = IfZero(time021) + ending;

  var time022 = check24(
    gmt + (24 + 8 - 14) > 24 ? gmt + (24 + 8 - 14) - 24 : gmt + (24 + 8 - 14)
  );
  document.clock.time022.value = IfZero(time022) + ending;

  var time023 = check24(
    gmt + (24 + 8 - 14) > 24 ? gmt + (24 + 8 - 14) - 24 : gmt + (24 + 8 - 14)
  );
  document.clock.time023.value = IfZero(time023) + ending;

  var time024 = check24(
    gmt + (24 + 8 - 15) > 24 ? gmt + (24 + 8 - 15) - 24 : gmt + (24 + 8 - 14)
  );
  document.clock.time024.value = IfZero(time024) + ending;

  var time025 = check24(
    gmt + (24 + 8 - 14) > 24 ? gmt + (24 + 8 - 14) - 24 : gmt + (24 + 8 - 14)
  );
  document.clock.time025.value = IfZero(time025) + ending;

  var time026 = check24(
    gmt + (24 + 8 - 13) > 24 ? gmt + (24 + 8 - 13) - 24 : gmt + (24 + 8 - 13)
  );
  document.clock.time026.value = IfZero(time026) + ending;

  var time027 = check24(
    gmt + (24 + 8 - 11) > 24 ? gmt + (24 + 8 - 11) - 24 : gmt + (24 + 8 - 11)
  );
  document.clock.time027.value = IfZero(time027) + ending;

  var time028 = check24(
    gmt + (24 + 8 - 13) > 24 ? gmt + (24 + 8 - 13) - 24 : gmt + (24 + 8 - 13)
  );
  document.clock.time028.value = IfZero(time028) + ending;

  var time029 = check24(
    gmt + (24 + 8 - 13) > 24 ? gmt + (24 + 8 - 13) - 24 : gmt + (24 + 8 - 13)
  );
  document.clock.time029.value = IfZero(time029) + ending;

  var time030 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time030.value = IfZero(time030) + ending;

  var time031 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time031.value = IfZero(time031) + ending;

  var time032 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time032.value = IfZero(time032) + ending;

  var time033 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time033.value = IfZero(time033) + ending;

  var time034 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time034.value = IfZero(time034) + ending;

  var time035 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time035.value = IfZero(time035) + ending;

  var time036 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time036.value = IfZero(time036) + ending;

  var time037 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time037.value = IfZero(time037) + ending;

  var time038 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time038.value = IfZero(time038) + ending;

  var time039 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time039.value = IfZero(time039) + ending;

  var time040 = check24(
    gmt + (24 + 8 - 8) > 24 ? gmt + (24 + 8 - 8) - 24 : gmt + (24 + 8 - 8)
  );
  document.clock.time040.value = IfZero(time040) + ending;

  var time041 = check24(
    gmt + (24 + 8 - 8) > 24 ? gmt + (24 + 8 - 8) - 24 : gmt + (24 + 8 - 8)
  );
  document.clock.time041.value = IfZero(time041) + ending;

  var time042 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time042.value = IfZero(time042) + ending;

  var time043 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time043.value = IfZero(time043) + ending;

  var time044 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time044.value = IfZero(time044) + ending;

  var time045 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time045.value = IfZero(time045) + ending;

  var time046 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time046.value = IfZero(time046) + ending;

  var time047 = check24(
    gmt + (24 + 8 - 8) > 24 ? gmt + (24 + 8 - 8) - 24 : gmt + (24 + 8 - 8)
  );
  document.clock.time047.value = IfZero(time047) + ending;

  var time048 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time048.value = IfZero(time048) + ending;

  var time049 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time049.value = IfZero(time049) + ending;

  var time050 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time050.value = IfZero(time050) + ending;

  var time051 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time051.value = IfZero(time051) + ending;

  var time052 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time052.value = IfZero(time052) + ending;

  var time053 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time053.value = IfZero(time053) + ending;

  var time054 = check24(
    gmt + (24 + 8 - 8) > 24 ? gmt + (24 + 8 - 8) - 24 : gmt + (24 + 8 - 8)
  );
  document.clock.time054.value = IfZero(time054) + ending;

  var time055 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time055.value = IfZero(time055) + ending;

  var time056 = check24(
    gmt + (24 + 8 - 5) > 24 ? gmt + (24 + 8 - 5) - 24 : gmt + (24 + 8 - 5)
  );
  document.clock.time056.value = IfZero(time056) + ending;

  var time057 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time057.value = IfZero(time057) + ending;

  var time058 = check24(
    gmt + (24 + 8 + 3) > 24 ? gmt + (24 + 8 + 3) - 24 : gmt + (24 + 8 + 3)
  );
  document.clock.time058.value = IfZero(time058) + ending;

  var time059 = check24(
    gmt + (24 + 8 + 4) > 24 ? gmt + (24 + 8 + 4) - 24 : gmt + (24 + 8 + 4)
  );
  document.clock.time059.value = IfZero(time059) + ending;

  var time060 = check24(
    gmt + (24 + 8 + 4) > 24 ? gmt + (24 + 8 + 5) - 24 : gmt + (24 + 8 + 5)
  );
  document.clock.time060.value = IfZero(time060) + ending;

  var time061 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time061.value = IfZero(time061) + ending;

  var time062 = check24(
    gmt + (24 + 8 - 13) > 24 ? gmt + (24 + 8 - 13) - 24 : gmt + (24 + 8 - 13)
  );
  document.clock.time062.value = IfZero(time062) + ending;

  var time063 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time063.value = IfZero(time063) + ending;

  var time064 = check24(
    gmt + (24 + 8 - 5) > 24 ? gmt + (24 + 8 - 5) - 24 : gmt + (24 + 8 - 5)
  );
  document.clock.time064.value = IfZero(time064) + ending;

  var time065 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time065.value = IfZero(time065) + ending;

  var time066 = check24(
    gmt + (24 + 8 - 4) > 24 ? gmt + (24 + 8 - 4) - 24 : gmt + (24 + 8 - 4)
  );
  document.clock.time066.value = IfZero(time066) + ending;

  var time067 = check24(
    gmt + (24 + 8 - 5) > 24 ? gmt + (24 + 8 - 5) - 24 : gmt + (24 + 8 - 5)
  );
  document.clock.time067.value = IfZero(time067) + ending;

  var time068 = check24(
    gmt + (24 + 8 - 5) > 24 ? gmt + (24 + 8 - 5) - 24 : gmt + (24 + 8 - 5)
  );
  document.clock.time068.value = IfZero(time068) + ending;

  var time069 = check24(
    gmt + (24 + 8 - 5) > 24 ? gmt + (24 + 8 - 5) - 24 : gmt + (24 + 8 - 5)
  );
  document.clock.time069.value = IfZero(time069) + ending;

  var time070 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time070.value = IfZero(time070) + ending;

  var time071 = check24(
    gmt + (24 + 8 - 8) > 24 ? gmt + (24 + 8 - 8) - 24 : gmt + (24 + 8 - 8)
  );
  document.clock.time071.value = IfZero(time071) + ending;

  var time072 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time072.value = IfZero(time072) + ending;

  var time073 = check24(
    gmt + (24 + 8 - 4) > 24 ? gmt + (24 + 8 - 4) - 24 : gmt + (24 + 8 - 4)
  );
  document.clock.time073.value = IfZero(time073) + ending;

  var time074 = check24(
    gmt + (24 + 8 - 5) > 24 ? gmt + (24 + 8 - 5) - 24 : gmt + (24 + 8 - 5)
  );
  document.clock.time074.value = IfZero(time074) + ending;

  var time075 = check24(
    gmt + (24 + 8 - 8) > 24 ? gmt + (24 + 8 - 8) - 24 : gmt + (24 + 8 - 8)
  );
  document.clock.time075.value = IfZero(time075) + ending;

  var time076 = check24(
    gmt + (24 + 8 - 7) > 24 ? gmt + (24 + 8 - 7) - 24 : gmt + (24 + 8 - 7)
  );
  document.clock.time076.value = IfZero(time076) + ending;

  var time077 = check24(
    gmt + (24 + 8 - 5) > 24 ? gmt + (24 + 8 - 5) - 24 : gmt + (24 + 8 - 5)
  );
  document.clock.time077.value = IfZero(time077) + ending;

  var time078 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time078.value = IfZero(time078) + ending;

  var time079 = check24(
    gmt + (24 + 8 - 5) > 24 ? gmt + (24 + 8 - 5) - 24 : gmt + (24 + 8 - 5)
  );
  document.clock.time079.value = IfZero(time079) + ending;

  var time080 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time080.value = IfZero(time080) + ending;

  var time081 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time081.value = IfZero(time081) + ending;

  var time082 = check24(
    gmt + (24 + 8 - 15) > 24 ? gmt + (24 + 8 - 15) - 24 : gmt + (24 + 8 - 15)
  );
  document.clock.time082.value = IfZero(time082) + ending;

  var time083 = check24(
    gmt + (24 + 8 - 6) > 24 ? gmt + (24 + 8 - 6) - 24 : gmt + (24 + 8 - 6)
  );
  document.clock.time083.value = IfZero(time083) + ending;

  var time084 = check24(
    gmt + (24 + 8 - 4) > 24 ? gmt + (24 + 8 - 4) - 24 : gmt + (24 + 8 - 4)
  );
  document.clock.time084.value = IfZero(time084) + ending;

  var time085 = check24(
    gmt + (24 + 8 - 2) > 24 ? gmt + (24 + 8 - 2) - 24 : gmt + (24 + 8 - 2)
  );
  document.clock.time085.value = IfZero(time085) + ending;

  var time086 = check24(
    gmt + (24 + 8 - 3) > 24 ? gmt + (24 + 8 - 3) - 24 : gmt + (24 + 8 - 3)
  );
  document.clock.time086.value = IfZero(time086) + ending;

  setTimeout("GetTime()", 1000);
}
function IfZero(num) {
  return num <= 9 ? "0" + num : num;
}
function check24(hour) {
  return hour >= 24 ? hour - 24 : hour;
}
