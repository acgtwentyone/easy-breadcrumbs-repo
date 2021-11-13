//
//  RNEasyBreadcrumbModule.swift
//  RNEasyBreadcrumbModule
//
//  Copyright © 2021 acgtwentyone. All rights reserved.
//

import Foundation

@objc(RNEasyBreadcrumbModule)
class RNEasyBreadcrumbModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
