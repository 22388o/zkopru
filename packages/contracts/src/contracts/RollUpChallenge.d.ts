/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from 'bn.js'
import { Contract, ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import { ContractEvent, Callback, TransactionObject, BlockType } from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export class RollUpChallenge extends Contract {
  constructor(jsonInterface: any[], address?: string, options?: ContractOptions)
  clone(): RollUpChallenge
  methods: {
    CHALLENGE_LIMIT(): TransactionObject<string>

    CHALLENGE_PERIOD(): TransactionObject<string>

    MINIMUM_STAKE(): TransactionObject<string>

    POOL_SIZE(): TransactionObject<string>

    REF_DEPTH(): TransactionObject<string>

    SUB_TREE_DEPTH(): TransactionObject<string>

    SUB_TREE_SIZE(): TransactionObject<string>

    committedDeposits(
      massDepositHash: string | number[],
    ): TransactionObject<string>

    finalizedUTXOs(utxoRoot: string | number[]): TransactionObject<boolean>

    massDepositId(): TransactionObject<string>

    migrations(migrationHash: string | number[]): TransactionObject<boolean>

    parentOf(header: string | number[]): TransactionObject<string>

    proposals(
      proposalId: string | number[],
    ): TransactionObject<{
      header: string
      challengeDue: string
      slashed: boolean
      0: string
      1: string
      2: boolean
    }>

    proposers(
      addr: string,
    ): TransactionObject<{
      stake: string
      reward: string
      exitAllowance: string
      0: string
      1: string
      2: string
    }>

    snapshotTimestamp(): TransactionObject<string>

    stagedDeposits(): TransactionObject<{
      merged: string
      fee: string
      0: string
      1: string
    }>

    stagedSize(): TransactionObject<string>

    utxoRootOf(header: string | number[]): TransactionObject<string>

    withdrawables(
      idx: number | string,
    ): TransactionObject<{
      root: string
      index: string
      0: string
      1: string
    }>

    withdrawn(leaf: string | number[]): TransactionObject<boolean>

    challengeUTXORollUp(
      utxoRollUpId: number | string,
      _deposits: (number | string)[],
      numOfUTXOs: number | string,
      arg3: string | number[],
      arg4: string | number[],
    ): TransactionObject<void>

    challengeNullifierRollUp(
      nullifierRollUpId: number | string,
      numOfNullifiers: number | string,
      arg2: string | number[],
      arg3: string | number[],
    ): TransactionObject<void>

    challengeWithdrawalRollUp(
      withdrawalRollUpId: number | string,
      numOfWithdrawals: number | string,
      arg2: string | number[],
      arg3: string | number[],
    ): TransactionObject<void>
  }
  events: {
    allEvents: (options?: EventOptions, cb?: Callback<EventLog>) => EventEmitter
  }
}
