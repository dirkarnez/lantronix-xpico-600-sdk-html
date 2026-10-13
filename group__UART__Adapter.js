var group__UART__Adapter =
[
    [ "_hal_uart_config", "struct__hal__uart__config.html", [
      [ "baudRate_Bps", "struct__hal__uart__config.html#a7a025079f248c8caa954a7d17658564c", null ],
      [ "enableRx", "struct__hal__uart__config.html#a4b745bb5c341b931b4fc4be492d6de2d", null ],
      [ "enableRxRTS", "struct__hal__uart__config.html#a727817023245bbfe140184c8b885c063", null ],
      [ "enableTx", "struct__hal__uart__config.html#a9e4241e0fff5fbac3f2fc57cc394f057", null ],
      [ "enableTxCTS", "struct__hal__uart__config.html#aba8eac4a9f11a80fb8a679165040fab3", null ],
      [ "instance", "struct__hal__uart__config.html#a9125f3e3e2656f3c48081098f0ab69e1", null ],
      [ "parityMode", "struct__hal__uart__config.html#a842eae1042af35eb9a63682866741cd4", null ],
      [ "srcClock_Hz", "struct__hal__uart__config.html#a61a6c278fe13742de953f009fc6fea48", null ],
      [ "stopBitCount", "struct__hal__uart__config.html#a5c6d36b20931c603daca064da0806fd5", null ]
    ] ],
    [ "_hal_uart_transfer", "struct__hal__uart__transfer.html", [
      [ "data", "struct__hal__uart__transfer.html#a31c68714b4d6b61adc78b34bd97d5858", null ],
      [ "dataSize", "struct__hal__uart__transfer.html#a6870c6ce86f5841aad5d8a855c183d88", null ]
    ] ],
    [ "HAL_UART_ADAPTER_FIFO", "group__UART__Adapter.html#ga056e95fa5fd6c4683bd49209b5c83782", null ],
    [ "HAL_UART_DMA_IDLELINE_TIMEOUT", "group__UART__Adapter.html#ga65f0632e17011f650821a3432516b121", null ],
    [ "HAL_UART_DMA_INIT_ENABLE", "group__UART__Adapter.html#ga6f1ea14fcf0df4b2db9d18feeba7fc1f", null ],
    [ "HAL_UART_HANDLE_SIZE", "group__UART__Adapter.html#gaf29d1da1f03c0e201cc643164d6cebd2", null ],
    [ "HAL_UART_TRANSFER_MODE", "group__UART__Adapter.html#ga16a70d80d91c156451608862bb0f3d69", null ],
    [ "UART_ADAPTER_NON_BLOCKING_MODE", "group__UART__Adapter.html#ga1e416e28a4597d2c7bb899dd77f03035", null ],
    [ "UART_HANDLE_DEFINE", "group__UART__Adapter.html#gaec964c39538bce11685bb9a77e1bc67a", null ],
    [ "hal_uart_config_t", "group__UART__Adapter.html#ga1545cbd3c961cbe725ed2a75ffc5a999", null ],
    [ "hal_uart_dma_handle_t", "group__UART__Adapter.html#gaada11b3f0c0eb00c9845dc01ab9afea9", null ],
    [ "hal_uart_handle_t", "group__UART__Adapter.html#gae4e2bad20cdbd350adfa29a03102a2dc", null ],
    [ "hal_uart_parity_mode_t", "group__UART__Adapter.html#ga24029165f252c4fe925cdb8af52b3b8f", null ],
    [ "hal_uart_status_t", "group__UART__Adapter.html#ga352ee9bdc398eba4262ca7656f9c5e50", null ],
    [ "hal_uart_stop_bit_count_t", "group__UART__Adapter.html#gad0fc800e49978f5aee5c162009b16bdb", null ],
    [ "hal_uart_transfer_callback_t", "group__UART__Adapter.html#ga3ec04aac6c3adbcaeec9a593ebf0f9be", null ],
    [ "hal_uart_transfer_t", "group__UART__Adapter.html#gae828850e160c8cac564844089431e46e", null ],
    [ "_hal_uart_parity_mode", "group__UART__Adapter.html#ga4bfc5f54ba1569ae2dfcc1d7ae0be0f3", [
      [ "kHAL_UartParityDisabled", "group__UART__Adapter.html#gga4bfc5f54ba1569ae2dfcc1d7ae0be0f3a08fcd92b9342a589174cb30bc87c8536", null ],
      [ "kHAL_UartParityEven", "group__UART__Adapter.html#gga4bfc5f54ba1569ae2dfcc1d7ae0be0f3ad5aa4e9333286303c2aacaf0720d0393", null ],
      [ "kHAL_UartParityOdd", "group__UART__Adapter.html#gga4bfc5f54ba1569ae2dfcc1d7ae0be0f3abf5f4cdb5e90b0fc1c3e079d305cb90d", null ]
    ] ],
    [ "_hal_uart_status", "group__UART__Adapter.html#gaaaffa428b5b9f79a5e510eb34c74f8f6", [
      [ "kStatus_HAL_UartSuccess", "group__UART__Adapter.html#ggaaaffa428b5b9f79a5e510eb34c74f8f6ace53957d3570fb00454fdd51484e8a4b", null ],
      [ "kStatus_HAL_UartTxBusy", "group__UART__Adapter.html#ggaaaffa428b5b9f79a5e510eb34c74f8f6aef9c1d027988265c69aef95219493bf6", null ],
      [ "kStatus_HAL_UartRxBusy", "group__UART__Adapter.html#ggaaaffa428b5b9f79a5e510eb34c74f8f6a58742a06efe6f0a686c82d1bbf1347e4", null ],
      [ "kStatus_HAL_UartTxIdle", "group__UART__Adapter.html#ggaaaffa428b5b9f79a5e510eb34c74f8f6a191f28681f86e8a374711e455949fa3d", null ],
      [ "kStatus_HAL_UartRxIdle", "group__UART__Adapter.html#ggaaaffa428b5b9f79a5e510eb34c74f8f6acd7b1ae53a0bcb77d67cc66701c3c7f5", null ],
      [ "kStatus_HAL_UartBaudrateNotSupport", "group__UART__Adapter.html#ggaaaffa428b5b9f79a5e510eb34c74f8f6a56abdea917d92b3a62fb1ee09bfc416f", null ],
      [ "kStatus_HAL_UartProtocolError", "group__UART__Adapter.html#ggaaaffa428b5b9f79a5e510eb34c74f8f6a4dad70c2171b2445de1224d65645164e", null ],
      [ "kStatus_HAL_UartError", "group__UART__Adapter.html#ggaaaffa428b5b9f79a5e510eb34c74f8f6a3e539021cfde4b3468c00de4f834e84e", null ]
    ] ],
    [ "_hal_uart_stop_bit_count", "group__UART__Adapter.html#gac8e83321127267d2bed1659d4227f050", [
      [ "kHAL_UartOneStopBit", "group__UART__Adapter.html#ggac8e83321127267d2bed1659d4227f050a34f5d0e676eead962173aa956b850476", null ],
      [ "kHAL_UartTwoStopBit", "group__UART__Adapter.html#ggac8e83321127267d2bed1659d4227f050ab4bec3351a5a5818347a899989cd65e4", null ]
    ] ],
    [ "HAL_UartDeinit", "group__UART__Adapter.html#gab68259998677f787072799042ed0ce34", null ],
    [ "HAL_UartEnterLowpower", "group__UART__Adapter.html#gabbb5549df83873ae3cfc59a8cbcd1712", null ],
    [ "HAL_UartExitLowpower", "group__UART__Adapter.html#ga7399f84407e69805b4d603bc385adb81", null ],
    [ "HAL_UartInit", "group__UART__Adapter.html#ga94fb66eff085a5f4f48223f3fb51ee73", null ],
    [ "HAL_UartReceiveBlocking", "group__UART__Adapter.html#ga652499fca5739b0d61df775e371279bb", null ],
    [ "HAL_UartSendBlocking", "group__UART__Adapter.html#gae7104925b7bff899a7631c5ee708dc5c", null ]
];