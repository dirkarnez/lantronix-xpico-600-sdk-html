var group__i2c__master__driver =
[
    [ "_i2c_master_config", "struct__i2c__master__config.html", [
      [ "baudRate_Bps", "struct__i2c__master__config.html#a282b6a9bd8e98bf35e8183665488d98c", null ],
      [ "enableMaster", "struct__i2c__master__config.html#a7a58fd313d0615ac1ca70d2b4f17ae9a", null ],
      [ "enableTimeout", "struct__i2c__master__config.html#ae638534f9f5735a294e951652c1d650b", null ],
      [ "timeout_Ms", "struct__i2c__master__config.html#a7e002b275a9aeb2eca99c3c9e6f95416", null ]
    ] ],
    [ "_i2c_master_handle", "struct__i2c__master__handle.html", [
      [ "buf", "struct__i2c__master__handle.html#a62ffa1c0fea595fb26ac5604c437a549", null ],
      [ "checkAddrNack", "struct__i2c__master__handle.html#ab5d215cd09ce55b830be46d856764684", null ],
      [ "completionCallback", "struct__i2c__master__handle.html#a0c6862e22cf2047661ce05975756093a", null ],
      [ "remainingBytes", "struct__i2c__master__handle.html#aa041075cd1ecaf90bcc73d96478e94cf", null ],
      [ "state", "struct__i2c__master__handle.html#ade67a2d6339836711ee255a18405e750", null ],
      [ "transfer", "struct__i2c__master__handle.html#a403d5da02efab45e1ebb8bef2ae063d5", null ],
      [ "transferCount", "struct__i2c__master__handle.html#ab08095b4638786e1b364c1eed398fce4", null ],
      [ "userData", "struct__i2c__master__handle.html#a862e1a312eb8b2bd537f1a22a48f455f", null ]
    ] ],
    [ "_i2c_master_transfer", "struct__i2c__master__transfer.html", [
      [ "data", "struct__i2c__master__transfer.html#a083727a4268398628225a68cad8c4a50", null ],
      [ "dataSize", "struct__i2c__master__transfer.html#a7034b157201c46c116dc251e3b56412d", null ],
      [ "direction", "struct__i2c__master__transfer.html#a7bd3afcf89b78d9397b2f0c55f9deb27", null ],
      [ "flags", "struct__i2c__master__transfer.html#a84861e140902bd67ae901b2f4c53bfc0", null ],
      [ "slaveAddress", "struct__i2c__master__transfer.html#aa6d93caa78fc9bf0f0aac10f66b8eba1", null ],
      [ "subaddress", "struct__i2c__master__transfer.html#a7a4f43a16e63d9f286bc41b6255b5e3f", null ],
      [ "subaddressSize", "struct__i2c__master__transfer.html#a0c2c6dde8d11db7793fdea90f1b34afb", null ]
    ] ],
    [ "i2c_direction_t", "group__i2c__master__driver.html#ga4bf954d998f086594eece268c780bec7", null ],
    [ "i2c_master_config_t", "group__i2c__master__driver.html#gad739710b6b65e12ca5ba9dc2a2a2b463", null ],
    [ "i2c_master_handle_t", "group__i2c__master__driver.html#ga2fd51f58b8cfd309be985bce4b817fdc", null ],
    [ "i2c_master_transfer_callback_t", "group__i2c__master__driver.html#ga96d8838aa106b732cb1e6be037e320e9", null ],
    [ "i2c_master_transfer_t", "group__i2c__master__driver.html#ga7edd253f4df51a13bd0a6a0461b9f93a", null ],
    [ "_i2c_direction", "group__i2c__master__driver.html#ga1625497320644ba123718bafdd2c1f39", [
      [ "kI2C_Write", "group__i2c__master__driver.html#gga1625497320644ba123718bafdd2c1f39a93b476b469c2a4bfed5916b458ae9bb0", null ],
      [ "kI2C_Read", "group__i2c__master__driver.html#gga1625497320644ba123718bafdd2c1f39a3a7bb24dc8d1c1be8925603eeafe9b30", null ]
    ] ],
    [ "_i2c_master_transfer_flags", "group__i2c__master__driver.html#ga87ea07668194cfb46c7c368d2cb42433", [
      [ "kI2C_TransferDefaultFlag", "group__i2c__master__driver.html#gga87ea07668194cfb46c7c368d2cb42433ae80f7b768b1621e42ac965d3d23de5e2", null ],
      [ "kI2C_TransferNoStartFlag", "group__i2c__master__driver.html#gga87ea07668194cfb46c7c368d2cb42433a5cb44bf860c0482c0ca0165cf0d31d8a", null ],
      [ "kI2C_TransferRepeatedStartFlag", "group__i2c__master__driver.html#gga87ea07668194cfb46c7c368d2cb42433aadf112471ef12f194985a093cd9b9721", null ],
      [ "kI2C_TransferNoStopFlag", "group__i2c__master__driver.html#gga87ea07668194cfb46c7c368d2cb42433afb8aeea71b5b7475e3d3df86220db566", null ]
    ] ],
    [ "_i2c_transfer_states", "group__i2c__master__driver.html#gab08c1a0d50859637b4305687278941ee", null ],
    [ "I2C_GetInstance", "group__i2c__master__driver.html#ga07cc6bd20f700249c335893427bf462a", null ],
    [ "I2C_GetStatusFlags", "group__i2c__master__driver.html#ga30ea754c9685d10f394989ea19a6be22", null ],
    [ "I2C_MasterDeinit", "group__i2c__master__driver.html#gadcf7122f0a38d4d9da0f052fcb167957", null ],
    [ "I2C_MasterGetDefaultConfig", "group__i2c__master__driver.html#gad69f2d63ea756dda60749ff6b09f587d", null ],
    [ "I2C_MasterInit", "group__i2c__master__driver.html#ga29f967b3ae8487a36ba2a58deb01ccae", null ],
    [ "I2C_MasterReadBlocking", "group__i2c__master__driver.html#gaba04c62ee636dd8317c2235c3c82aa3b", null ],
    [ "I2C_MasterSetBaudRate", "group__i2c__master__driver.html#gafeab1d5249a8b39c8d9e1a54a85c23f0", null ],
    [ "I2C_MasterSetTimeoutValue", "group__i2c__master__driver.html#gae0d0c95b28e307b2d4a6ea420809b9e4", null ],
    [ "I2C_MasterStart", "group__i2c__master__driver.html#ga7664234966e4162e952b6d57efcaa8a6", null ],
    [ "I2C_MasterStop", "group__i2c__master__driver.html#gaf46a8cc094fc18c6cadea8de71448723", null ],
    [ "I2C_MasterTransferAbort", "group__i2c__master__driver.html#gabb386e53b2bc64e29b2915bdfac36800", null ],
    [ "I2C_MasterTransferBlocking", "group__i2c__master__driver.html#ga35cae3a5b4aa50ce8db28e3eb703a027", null ],
    [ "I2C_MasterTransferCreateHandle", "group__i2c__master__driver.html#ga31e3de02b57801c6896e6045c4a31268", null ],
    [ "I2C_MasterTransferGetCount", "group__i2c__master__driver.html#ga7d720842e68161d2d52d56d119f20665", null ],
    [ "I2C_MasterTransferHandleIRQ", "group__i2c__master__driver.html#gafbf792484d11820561fa22bb27f73284", null ],
    [ "I2C_MasterTransferNonBlocking", "group__i2c__master__driver.html#gac7f76a04b6f6873c52ad176d58901fe9", null ],
    [ "I2C_MasterWriteBlocking", "group__i2c__master__driver.html#ga3b4d71b59e118adc63afbc5434e5e7dd", null ]
];