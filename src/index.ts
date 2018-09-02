/**
 * Copyright (c) 2018-present, Matei Bogdan Radu <matei.radu.92@gmail.com>
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */

import { NativeModules } from "react-native";
import { isUrlValid } from "./utils/validation";

function openInApp(url: string): Promise<{}> {
  return new Promise((resolve, reject) => {
    if (!isUrlValid(url)) {
      reject("Invalid URL");
      return;
    }

    NativeModules.RNInAppBrowser.openInApp(url);
    resolve();
  });
}
export default openInApp;
