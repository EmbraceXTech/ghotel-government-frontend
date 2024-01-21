/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface IERC5679Ext1155Interface extends Interface {
  getFunction(
    nameOrSignature: "burn" | "burnBatch" | "safeMint" | "safeMintBatch"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burn",
    values: [AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "burnBatch",
    values: [AddressLike, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeMint",
    values: [AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeMintBatch",
    values: [AddressLike, BigNumberish[], BigNumberish[], BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "safeMint", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "safeMintBatch",
    data: BytesLike
  ): Result;
}

export interface IERC5679Ext1155 extends BaseContract {
  connect(runner?: ContractRunner | null): IERC5679Ext1155;
  waitForDeployment(): Promise<this>;

  interface: IERC5679Ext1155Interface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  burn: TypedContractMethod<
    [
      _from: AddressLike,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  burnBatch: TypedContractMethod<
    [
      _from: AddressLike,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeMint: TypedContractMethod<
    [
      _to: AddressLike,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  safeMintBatch: TypedContractMethod<
    [
      to: AddressLike,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "burn"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "burnBatch"
  ): TypedContractMethod<
    [
      _from: AddressLike,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeMint"
  ): TypedContractMethod<
    [
      _to: AddressLike,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "safeMintBatch"
  ): TypedContractMethod<
    [
      to: AddressLike,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  filters: {};
}