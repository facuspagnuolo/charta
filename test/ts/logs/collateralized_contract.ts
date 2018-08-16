import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as LogUtils from "./log_utils";

import { Address, Bytes32, UInt } from "../../../types/common";

export function CollateralLocked(
    contract: Address,
    agreementID: Bytes32,
    token: Address,
    amount: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementID", agreementID],
            ["token", token],
            ["amount", amount],
        ]),
        name: "CollateralLocked",
    };
}

export function ERC721CollateralLocked(
    contract: Address,
    agreementID: Bytes32,
    token: Address,
    tokenId: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementID", agreementID],
            ["token", token],
            ["tokenID", tokenId],
        ]),
        name: "CollateralLocked",
    };
}

export function CollateralReturned(
    contract: Address,
    agreementID: Bytes32,
    collateralizer: Address,
    token: Address,
    amount: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementID", agreementID],
            ["collateralizer", collateralizer],
            ["token", token],
            ["amount", amount],
        ]),
        name: "CollateralReturned",
    };
}

export function CollateralSeized(
    contract: Address,
    agreementID: Bytes32,
    beneficiary: Address,
    token: Address,
    amount: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementID", agreementID],
            ["beneficiary", beneficiary],
            ["token", token],
            ["amount", amount],
        ]),
        name: "CollateralSeized",
    };
}

export function ERC721CollateralReturned(
    contract: Address,
    agreementID: Bytes32,
    collateralizer: Address,
    token: Address,
    tokenId: UInt,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["agreementID", agreementID],
            ["collateralizer", collateralizer],
            ["token", token],
            ["tokenID", tokenId],
        ]),
        name: "CollateralReturned",
    };
}
