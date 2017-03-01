import { sillyRandomId } from '../../common/utils';
/* eslint quote-props:0 */
const EmptyShop = {
  'address': '',
  'addressDesc': '',
  'authorizationPictureList': [], // [{"id":"8T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=8T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=5625e49e1d709a0e46cb0a088b41a771&zoom=original"}],
  'bindingPublic': false,
  'brandId': '',
  'brandName': '',
  'businessTime': '', // "1-7 09:00-23:00",
  'canModifyCategory': false,
  'categoryId': '',
  'categoryName': '',
  'categoryIds': [], // ["2015050700000000","2015050700000002","2015050700000010"],
  'certificatePictureList': [], // [{"id":"6T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=6T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=64d604fab880b714a0803f8d471ee8a4&zoom=original"}],
  'certificateValidTime': '', // "2025-08-08",
  'cityId': '',
  'cityName': '',
  'coverList': [], // [{"id":"2T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=2T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=de977372c9e39b86e13544d928ffc6d4&zoom=original"}],
  'districtId': '',
  'districtName': '',
  'extInfo': {
    'isSupportH5': 'true',
    'jobId': '1000000010017596',
    'opRole': 'S_STAFF',
  },
  'headShopName': '',
  'latitude': '',
  'licenseName': '',
  'licensePictureList': [], // [{"id":"7T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=7T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=b90c301ecb2b1bf3dae6fce559b486eb&zoom=original"}],
  'licenseSeq': '',
  'licenseValidTime': '', // "2025-08-09",
  'logoList': [], // [{"id":"1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=1T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=016e70350b818b883dd08e7dde597995&zoom=original"}],
  'longitude': '', // "121.549728",
  'mobileNo': '',
  'otherAuthorizationList': [], // [{"id":"9T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=9T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=0fa5cfb8c618436721eb3d7e9ff1218d&zoom=original"},{"id":"10T8Pp00AT7eo9NoAJkMR3AAAACMAAQE","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=10T8Pp00AT7eo9NoAJkMR3AAAACMAAQE&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=7f64ce939ba9a4d286091688a5c36f97&zoom=original"}],
  'otherService': '',
  'outShopId': '',
  'partnerId': '',
  'payType': 'SELF',
  'perPay': '',
  'pictureDetailList': [], // [{"id":"3T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=3T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=2789f892fa26e048f74c3f8aee6a40b2&zoom=original"},{"id":"4T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=4T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=c7134f4b8c045abdea910ab38d3bee5f&zoom=original"},{"id":"5T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC","url":"http://dl.django.t.taobao.com/rest/1.0/image?fileIds=5T8Pp00AT7eo9NoAJkMR3AAAACMAAQEC&token=3KgBye8YLzV5G0sn0nKxzQABUYAAAAFaSeZY9gAAACMAAQED&timestamp=1487306999101&acl=0671cbfac604946c70ed4edcd8f5cd4c&zoom=original"}],
  'provinceId': '',
  'provinceName': '',
  'receiveUserId': '',
  'services': {
    'box': 'false', 'noSmoke': 'false', 'park': 'true', 'wifi': 'false',
  },
  'shopId': '',
  'shopName': '',
  'shopLogo': 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  'shopLastModified': '',
  'shopProblemLabels': {
    'addressErrorReasons': [],
    'phoneNumberErrorReasons': [],
    'shopNameErrorReasons': [],
  },
  'shopType': 'COMMON',
};

export default class ShopEntity {
  constructor(options) {
    Object.assign(this, EmptyShop, options, {
      shopId: sillyRandomId(),
    });
  }
}
