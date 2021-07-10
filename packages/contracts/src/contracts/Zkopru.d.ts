/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from 'bn.js'
import { ContractOptions } from 'web3-eth-contract'
import { EventLog } from 'web3-core'
import { EventEmitter } from 'events'
import {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from './types'

interface EventOptions {
  filter?: object
  fromBlock?: BlockType
  topics?: string[]
}

export type GenesisBlock = ContractEventLog<{
  blockHash: string
  proposer: string
  fromBlock: string
  parentBlock: string
  0: string
  1: string
  2: string
  3: string
}>
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string
  newOwner: string
  0: string
  1: string
}>

export interface Zkopru extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions,
  ): Zkopru
  clone(): Zkopru
  methods: {
    CHALLENGE_PERIOD(): NonPayableTransactionObject<string>

    MAX_BLOCK_SIZE(): NonPayableTransactionObject<string>

    MAX_UTXO(): NonPayableTransactionObject<string>

    MAX_VALIDATION_GAS(): NonPayableTransactionObject<string>

    MAX_WITHDRAWAL(): NonPayableTransactionObject<string>

    MINIMUM_STAKE(): NonPayableTransactionObject<string>

    NULLIFIER_TREE_DEPTH(): NonPayableTransactionObject<string>

    REF_DEPTH(): NonPayableTransactionObject<string>

    UTXO_SUB_TREE_DEPTH(): NonPayableTransactionObject<string>

    UTXO_SUB_TREE_SIZE(): NonPayableTransactionObject<string>

    UTXO_TREE_DEPTH(): NonPayableTransactionObject<string>

    WITHDRAWAL_SUB_TREE_DEPTH(): NonPayableTransactionObject<string>

    WITHDRAWAL_SUB_TREE_SIZE(): NonPayableTransactionObject<string>

    WITHDRAWAL_TREE_DEPTH(): NonPayableTransactionObject<string>

    allowedMigrants(arg0: string): NonPayableTransactionObject<boolean>

    committedDeposits(
      massDepositHash: string | number[],
    ): NonPayableTransactionObject<string>

    consensusProvider(): NonPayableTransactionObject<string>

    finalized(
      headerHash: string | number[],
    ): NonPayableTransactionObject<boolean>

    finalizedUTXORoots(
      utxoRoot: string | number[],
    ): NonPayableTransactionObject<boolean>

    genesis(): NonPayableTransactionObject<string>

    getVk(
      numOfInputs: number | string | BN,
      numOfOutputs: number | string | BN,
    ): NonPayableTransactionObject<{
      alpha1: string[]
      beta2: string[][]
      gamma2: string[][]
      delta2: string[][]
      ic: string[][]
      0: string[]
      1: string[][]
      2: string[][]
      3: string[][]
      4: string[][]
    }>

    /**
     * Copy of `isProposable()` in Coordinatable.sol
     */
    isProposable(proposerAddr: string): NonPayableTransactionObject<boolean>

    /**
     * Getter for determining if an address is staked for the rollup.*
     */
    isStaked(coordinator: string): NonPayableTransactionObject<boolean>

    /**
     * Copy of `isValidRef()` in TxValidator.sol
     */
    isValidRef(
      l2BlockHash: string | number[],
      ref: number | string | BN,
    ): NonPayableTransactionObject<boolean>

    latest(): NonPayableTransactionObject<string>

    latestProposalBlock(
      coordinator: string,
    ): NonPayableTransactionObject<string>

    massDepositId(): NonPayableTransactionObject<string>

    migrationRoots(
      migrationRoot: string | number[],
    ): NonPayableTransactionObject<boolean>

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: number | string | BN,
      arg3: string | number[],
    ): NonPayableTransactionObject<string>

    /**
     * Returns the address of the current owner.
     */
    owner(): NonPayableTransactionObject<string>

    parentOf(header: string | number[]): NonPayableTransactionObject<string>

    proposals(
      proposalId: string | number[],
    ): NonPayableTransactionObject<{
      header: string
      challengeDue: string
      isSlashed: boolean
      0: string
      1: string
      2: boolean
    }>

    proposedBlocks(): NonPayableTransactionObject<string>

    proposers(
      addr: string,
    ): NonPayableTransactionObject<{
      stake: string
      reward: string
      exitAllowance: string
      0: string
      1: string
      2: string
    }>

    proxied(arg0: string | number[]): NonPayableTransactionObject<string>

    registeredERC20s(tokenAddr: string): NonPayableTransactionObject<boolean>

    registeredERC721s(tokenAddr: string): NonPayableTransactionObject<boolean>

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(): NonPayableTransactionObject<void>

    slashed(headerHash: string | number[]): NonPayableTransactionObject<boolean>

    stagedDeposits(): NonPayableTransactionObject<{
      merged: string
      fee: string
      0: string
      1: string
    }>

    stagedSize(): NonPayableTransactionObject<string>

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string): NonPayableTransactionObject<void>

    transferredMigrations(
      migrationRoot: string | number[],
      migrationHash: string | number[],
    ): NonPayableTransactionObject<boolean>

    utxoRootOf(header: string | number[]): NonPayableTransactionObject<string>

    validators(arg0: string | number[]): NonPayableTransactionObject<string>

    withdrawalRootOf(
      header: string | number[],
    ): NonPayableTransactionObject<string>

    withdrawn(leaf: string | number[]): NonPayableTransactionObject<boolean>

    registerVk(
      numOfInputs: number | string | BN,
      numOfOutputs: number | string | BN,
      vk: [
        [number | string | BN, number | string | BN],
        [(number | string | BN)[], (number | string | BN)[]],
        [(number | string | BN)[], (number | string | BN)[]],
        [(number | string | BN)[], (number | string | BN)[]],
        [number | string | BN, number | string | BN][],
      ],
    ): NonPayableTransactionObject<void>

    /**
     * It connects this proxy contract to the UserInteractable controller.
     */
    makeUserInteractable(addr: string): NonPayableTransactionObject<void>

    /**
     * It connects this proxy contract to the Coordinatable controller.
     */
    makeConfigurable(addr: string): NonPayableTransactionObject<void>

    /**
     * It connects this proxy contract to the Coordinatable controller.
     */
    makeCoordinatable(addr: string): NonPayableTransactionObject<void>

    /**
     * It connects this proxy contract to the Challengeable controllers.
     */
    makeChallengeable(
      challengeable: string,
      depositValidator: string,
      headerValidator: string,
      migrationValidator: string,
      utxoTreeValidator: string,
      withdrawalTreeValidator: string,
      nullifierTreeValidator: string,
      txValidator: string,
    ): NonPayableTransactionObject<void>

    /**
     * It connects this proxy contract to the Migratable controller.
     */
    makeMigratable(addr: string): NonPayableTransactionObject<void>

    /**
     * Migration process: 1. On the destination contract, execute allowMigrants() to configure the allowed migrants. The departure contract should be in the allowed list. 2. On the departure contract, execute migrateTo(). See "IMigratable.sol"
     * @param migrants List of contracts' address to allow migrations.
     */
    allowMigrants(migrants: string[]): NonPayableTransactionObject<void>

    /**
     * If you once execute this, every configuration freezes and does not change forever.
     */
    completeSetup(): NonPayableTransactionObject<void>
  }
  events: {
    GenesisBlock(cb?: Callback<GenesisBlock>): EventEmitter
    GenesisBlock(
      options?: EventOptions,
      cb?: Callback<GenesisBlock>,
    ): EventEmitter

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>,
    ): EventEmitter

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter
  }

  once(event: 'GenesisBlock', cb: Callback<GenesisBlock>): void
  once(
    event: 'GenesisBlock',
    options: EventOptions,
    cb: Callback<GenesisBlock>,
  ): void

  once(event: 'OwnershipTransferred', cb: Callback<OwnershipTransferred>): void
  once(
    event: 'OwnershipTransferred',
    options: EventOptions,
    cb: Callback<OwnershipTransferred>,
  ): void
}
