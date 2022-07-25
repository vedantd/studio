/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace SimpleRewarderPerSec {
  export type PoolInfoStruct = {
    accTokenPerShare: PromiseOrValue<BigNumberish>;
    lastRewardTimestamp: PromiseOrValue<BigNumberish>;
  };

  export type PoolInfoStructOutput = [BigNumber, BigNumber] & {
    accTokenPerShare: BigNumber;
    lastRewardTimestamp: BigNumber;
  };
}

export interface TraderJoeChefV3RewarderInterface extends utils.Interface {
  functions: {
    'MCJ()': FunctionFragment;
    'balance()': FunctionFragment;
    'claimOwnership()': FunctionFragment;
    'emergencyWithdraw()': FunctionFragment;
    'isNative()': FunctionFragment;
    'lpToken()': FunctionFragment;
    'onJoeReward(address,uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingOwner()': FunctionFragment;
    'pendingTokens(address)': FunctionFragment;
    'poolInfo()': FunctionFragment;
    'rewardToken()': FunctionFragment;
    'setRewardRate(uint256)': FunctionFragment;
    'tokenPerSec()': FunctionFragment;
    'transferOwnership(address,bool,bool)': FunctionFragment;
    'updatePool()': FunctionFragment;
    'userInfo(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MCJ'
      | 'balance'
      | 'claimOwnership'
      | 'emergencyWithdraw'
      | 'isNative'
      | 'lpToken'
      | 'onJoeReward'
      | 'owner'
      | 'pendingOwner'
      | 'pendingTokens'
      | 'poolInfo'
      | 'rewardToken'
      | 'setRewardRate'
      | 'tokenPerSec'
      | 'transferOwnership'
      | 'updatePool'
      | 'userInfo',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MCJ', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claimOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emergencyWithdraw', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isNative', values?: undefined): string;
  encodeFunctionData(functionFragment: 'lpToken', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'onJoeReward',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingTokens', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'poolInfo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setRewardRate', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'tokenPerSec', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'updatePool', values?: undefined): string;
  encodeFunctionData(functionFragment: 'userInfo', values: [PromiseOrValue<string>]): string;

  decodeFunctionResult(functionFragment: 'MCJ', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyWithdraw', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isNative', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'lpToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'onJoeReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenPerSec', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;

  events: {
    'OnReward(address,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'RewardRateUpdated(uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OnReward'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RewardRateUpdated'): EventFragment;
}

export interface OnRewardEventObject {
  user: string;
  amount: BigNumber;
}
export type OnRewardEvent = TypedEvent<[string, BigNumber], OnRewardEventObject>;

export type OnRewardEventFilter = TypedEventFilter<OnRewardEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface RewardRateUpdatedEventObject {
  oldRate: BigNumber;
  newRate: BigNumber;
}
export type RewardRateUpdatedEvent = TypedEvent<[BigNumber, BigNumber], RewardRateUpdatedEventObject>;

export type RewardRateUpdatedEventFilter = TypedEventFilter<RewardRateUpdatedEvent>;

export interface TraderJoeChefV3Rewarder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TraderJoeChefV3RewarderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    MCJ(overrides?: CallOverrides): Promise<[string]>;

    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    emergencyWithdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    isNative(overrides?: CallOverrides): Promise<[boolean]>;

    lpToken(overrides?: CallOverrides): Promise<[string]>;

    onJoeReward(
      _user: PromiseOrValue<string>,
      _lpAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    pendingTokens(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    poolInfo(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber] & {
        accTokenPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
      }
    >;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    setRewardRate(
      _tokenPerSec: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    tokenPerSec(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePool(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;
  };

  MCJ(overrides?: CallOverrides): Promise<string>;

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  claimOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  emergencyWithdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  isNative(overrides?: CallOverrides): Promise<boolean>;

  lpToken(overrides?: CallOverrides): Promise<string>;

  onJoeReward(
    _user: PromiseOrValue<string>,
    _lpAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  pendingTokens(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  poolInfo(overrides?: CallOverrides): Promise<
    [BigNumber, BigNumber] & {
      accTokenPerShare: BigNumber;
      lastRewardTimestamp: BigNumber;
    }
  >;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  setRewardRate(
    _tokenPerSec: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  tokenPerSec(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePool(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  userInfo(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

  callStatic: {
    MCJ(overrides?: CallOverrides): Promise<string>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    emergencyWithdraw(overrides?: CallOverrides): Promise<void>;

    isNative(overrides?: CallOverrides): Promise<boolean>;

    lpToken(overrides?: CallOverrides): Promise<string>;

    onJoeReward(
      _user: PromiseOrValue<string>,
      _lpAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    pendingTokens(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(overrides?: CallOverrides): Promise<
      [BigNumber, BigNumber] & {
        accTokenPerShare: BigNumber;
        lastRewardTimestamp: BigNumber;
      }
    >;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    setRewardRate(_tokenPerSec: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    tokenPerSec(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    updatePool(overrides?: CallOverrides): Promise<SimpleRewarderPerSec.PoolInfoStructOutput>;

    userInfo(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;
  };

  filters: {
    'OnReward(address,uint256)'(user?: PromiseOrValue<string> | null, amount?: null): OnRewardEventFilter;
    OnReward(user?: PromiseOrValue<string> | null, amount?: null): OnRewardEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;

    'RewardRateUpdated(uint256,uint256)'(oldRate?: null, newRate?: null): RewardRateUpdatedEventFilter;
    RewardRateUpdated(oldRate?: null, newRate?: null): RewardRateUpdatedEventFilter;
  };

  estimateGas: {
    MCJ(overrides?: CallOverrides): Promise<BigNumber>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    emergencyWithdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    isNative(overrides?: CallOverrides): Promise<BigNumber>;

    lpToken(overrides?: CallOverrides): Promise<BigNumber>;

    onJoeReward(
      _user: PromiseOrValue<string>,
      _lpAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingTokens(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    poolInfo(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardRate(
      _tokenPerSec: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    tokenPerSec(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePool(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    userInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    MCJ(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    emergencyWithdraw(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    isNative(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onJoeReward(
      _user: PromiseOrValue<string>,
      _lpAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingTokens(_user: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardRate(
      _tokenPerSec: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    tokenPerSec(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    userInfo(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
