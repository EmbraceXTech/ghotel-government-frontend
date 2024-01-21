/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  TestGho,
  TestGhoInterface,
} from "../../../../contracts/tests/TestGho.sol/TestGho";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "facilitatorAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "label",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bucketCapacity",
        type: "uint256",
      },
    ],
    name: "FacilitatorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "facilitatorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldCapacity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newCapacity",
        type: "uint256",
      },
    ],
    name: "FacilitatorBucketCapacityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "facilitatorAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldLevel",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newLevel",
        type: "uint256",
      },
    ],
    name: "FacilitatorBucketLevelUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "facilitatorAddress",
        type: "address",
      },
    ],
    name: "FacilitatorRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "BUCKET_MANAGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FACILITATOR_MANAGER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "facilitatorAddress",
        type: "address",
      },
      {
        internalType: "string",
        name: "facilitatorLabel",
        type: "string",
      },
      {
        internalType: "uint128",
        name: "bucketCapacity",
        type: "uint128",
      },
    ],
    name: "addFacilitator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "facilitator",
        type: "address",
      },
    ],
    name: "getFacilitator",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "bucketCapacity",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "bucketLevel",
            type: "uint128",
          },
          {
            internalType: "string",
            name: "label",
            type: "string",
          },
        ],
        internalType: "struct IGhoToken.Facilitator",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "facilitator",
        type: "address",
      },
    ],
    name: "getFacilitatorBucket",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFacilitatorsList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "facilitatorAddress",
        type: "address",
      },
    ],
    name: "removeFacilitator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "facilitator",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "newCapacity",
        type: "uint128",
      },
    ],
    name: "setFacilitatorBucketCapacity",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200207e3803806200207e833981016040819052620000349162000216565b6040518060400160405280600981526020016823b437902a37b5b2b760b91b8152506040518060400160405280600381526020016247484f60e81b81525060128260009081620000859190620002ed565b506001620000948382620002ed565b5060ff81166080524660a052620000aa620000c7565b60c05250620000bf9150600090508262000163565b505062000437565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000fb9190620003b9565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b60008281526006602090815260408083206001600160a01b038516845290915281205460ff166200020c5760008381526006602090815260408083206001600160a01b03861684529091529020805460ff19166001179055620001c33390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a450600162000210565b5060005b92915050565b6000602082840312156200022957600080fd5b81516001600160a01b03811681146200024157600080fd5b9392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200027357607f821691505b6020821081036200029457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002e857600081815260208120601f850160051c81016020861015620002c35750805b601f850160051c820191505b81811015620002e457828155600101620002cf565b5050505b505050565b81516001600160401b0381111562000309576200030962000248565b62000321816200031a84546200025e565b846200029a565b602080601f831160018114620003595760008415620003405750858301515b600019600386901b1c1916600185901b178555620002e4565b600085815260208120601f198616915b828110156200038a5788860151825594840194600190910190840162000369565b5085821015620003a95787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b6000808354620003c9816200025e565b60018281168015620003e45760018114620003fa576200042b565b60ff19841687528215158302870194506200042b565b8760005260208060002060005b85811015620004225781548a82015290840190820162000407565b50505082870194505b50929695505050505050565b60805160a05160c051611c1762000467600039600061078901526000610759015260006102d20152611c176000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c8063550d996411610104578063a217fddf116100a2578063d46ec0ed11610071578063d46ec0ed14610497578063d505accf146104b7578063d547741f146104ca578063dd62ed3e146104dd57600080fd5b8063a217fddf14610416578063a9059cbb1461041e578063aa02f94a14610431578063af93df571461048457600080fd5b80637fc24def116100de5780637fc24def146103d557806391d14854146103e857806395d89b41146103fb578063a11812ba1461040357600080fd5b8063550d99641461036e57806370a08231146103955780637ecebe00146103b557600080fd5b80632f2ff15d1161017c57806336568abe1161014b57806336568abe1461030e57806340c10f191461032157806342966c6814610334578063433bef441461034757600080fd5b80632f2ff15d1461029157806330adf81f146102a6578063313ce567146102cd5780633644e5151461030657600080fd5b806318160ddd116101b857806318160ddd1461022f5780631ec90f2e1461024657806323b872dd1461025b578063248a9ca31461026e57600080fd5b806301ffc9a7146101df57806306fdde0314610207578063095ea7b31461021c575b600080fd5b6101f26101ed36600461160c565b610508565b60405190151581526020015b60405180910390f35b61020f61053f565b6040516101fe919061167c565b6101f261022a3660046116ab565b6105cd565b61023860025481565b6040519081526020016101fe565b61024e610639565b6040516101fe91906116d5565b6101f2610269366004611722565b61064a565b61023861027c36600461175e565b60009081526006602052604090206001015490565b6102a461029f366004611777565b61072a565b005b6102387f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b6102f47f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff90911681526020016101fe565b610238610755565b6102a461031c366004611777565b6107ab565b6102a461032f3660046116ab565b6107e3565b6102a461034236600461175e565b61083c565b6102387f5e20732f79076148980e17b6ce9f22756f85058fe2765420ed48a504bef5a8bc81565b6102387fc7f115822aabac0cd6b9d21b08c0c63819451a58157aecad689d1b5674fad40881565b6102386103a33660046117a3565b60036020526000908152604090205481565b6102386103c33660046117a3565b60056020526000908152604090205481565b6102a46103e33660046117d5565b610917565b6101f26103f6366004611777565b610aa0565b61020f610acb565b6102a46104113660046117a3565b610ad8565b610238600081565b6101f261042c3660046116ab565b610c67565b61046f61043f3660046117a3565b6001600160a01b03166000908152600760205260409020546001600160801b0380821692600160801b9092041690565b604080519283526020830191909152016101fe565b6102a4610492366004611869565b610ccd565b6104aa6104a53660046117a3565b610dde565b6040516101fe9190611893565b6102a46104c53660046118d7565b610ed7565b6102a46104d8366004611777565b611128565b6102386104eb36600461194a565b600460209081526000928352604080842090915290825290205481565b60006001600160e01b03198216637965db0b60e01b148061053957506301ffc9a760e01b6001600160e01b03198316145b92915050565b6000805461054c90611974565b80601f016020809104026020016040519081016040528092919081815260200182805461057890611974565b80156105c55780601f1061059a576101008083540402835291602001916105c5565b820191906000526020600020905b8154815290600101906020018083116105a857829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906106289086815260200190565b60405180910390a350600192915050565b6060610645600861114d565b905090565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146106a65761068183826119c4565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906106ce9084906119c4565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611bc2833981519152906107179087815260200190565b60405180910390a3506001949350505050565b60008281526006602052604090206001015461074581611161565b61074f838361116e565b50505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461078657610645611202565b507f000000000000000000000000000000000000000000000000000000000000000090565b6001600160a01b03811633146107d45760405163334bd91960e11b815260040160405180910390fd5b6107de828261129c565b505050565b6000811161082e5760405162461bcd60e51b81526020600482015260136024820152721253959053125117d352539517d05353d55395606a1b60448201526064015b60405180910390fd5b6108388282611309565b5050565b600081116108825760405162461bcd60e51b81526020600482015260136024820152721253959053125117d095549397d05353d55395606a1b6044820152606401610825565b33600090815260076020526040812080549091600160801b9091046001600160801b0316906108b184836119c4565b83546001600160801b03808316600160801b02911617845590506108d53385611363565b604080518381526020810183905233917facb6de9209e4f34974cb165eef5738f0cf0b4ea9819ef30d30f0f7d81272ab8291015b60405180910390a250505050565b7f5e20732f79076148980e17b6ce9f22756f85058fe2765420ed48a504bef5a8bc61094181611161565b6001600160a01b038516600090815260076020526040902060018101805461096890611974565b1590506109b75760405162461bcd60e51b815260206004820152601a60248201527f464143494c495441544f525f414c52454144595f4558495354530000000000006044820152606401610825565b836109f45760405162461bcd60e51b815260206004820152600d60248201526c1253959053125117d310509153609a1b6044820152606401610825565b60018101610a03858783611a3b565b5080546001600160801b0319166001600160801b038416178155610a286008876113c5565b508484604051602001610a3c929190611afc565b60408051601f198184030181529082905280516020918201206001600160801b0386168352916001600160a01b038916917fdabd62626ada7b13e299389e94d768b294e5e24285ed2ffa1e5cd447c99c54ad910160405180910390a3505050505050565b60009182526006602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6001805461054c90611974565b7f5e20732f79076148980e17b6ce9f22756f85058fe2765420ed48a504bef5a8bc610b0281611161565b6001600160a01b03821660009081526007602052604081206001018054610b2890611974565b905011610b775760405162461bcd60e51b815260206004820152601a60248201527f464143494c495441544f525f444f45535f4e4f545f45584953540000000000006044820152606401610825565b6001600160a01b038216600090815260076020526040902054600160801b90046001600160801b031615610bf75760405162461bcd60e51b815260206004820152602160248201527f464143494c495441544f525f4255434b45545f4c4556454c5f4e4f545f5a45526044820152604f60f81b6064820152608401610825565b6001600160a01b038216600090815260076020526040812081815590610c2060018301826115be565b50610c2e90506008836113da565b506040516001600160a01b038316907fa8fe5b89f35f2ebd6f3f95a7ef215f4bd89179e10c101073ae76cffad14734cf90600090a25050565b33600090815260036020526040812080548391908390610c889084906119c4565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611bc2833981519152906106289086815260200190565b7fc7f115822aabac0cd6b9d21b08c0c63819451a58157aecad689d1b5674fad408610cf781611161565b6001600160a01b03831660009081526007602052604081206001018054610d1d90611974565b905011610d6c5760405162461bcd60e51b815260206004820152601a60248201527f464143494c495441544f525f444f45535f4e4f545f45584953540000000000006044820152606401610825565b6001600160a01b03831660008181526007602090815260409182902080546001600160801b031981166001600160801b03888116918217909355845192909116808352928201529092917fc795c0a4927c3b6645e4e49a5a519af936b3c1c0e4c323a3f7251063f3f4bb0e9101610909565b6040805160608082018352600080835260208084018290528385018390526001600160a01b038616825260078152908490208451928301855280546001600160801b038082168552600160801b9091041691830191909152600181018054939492939192840191610e4e90611974565b80601f0160208091040260200160405190810160405280929190818152602001828054610e7a90611974565b8015610ec75780601f10610e9c57610100808354040283529160200191610ec7565b820191906000526020600020905b815481529060010190602001808311610eaa57829003601f168201915b5050505050815250509050919050565b42841015610f275760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152606401610825565b6000610f31610755565b6001600160a01b0389811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938c166060840152608083018b905260a083019390935260c08083018a90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600080855291840180845281905260ff88169284019290925260608301869052608083018590529092509060019060a0016020604051602081039080840390855afa15801561104a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906110805750886001600160a01b0316816001600160a01b0316145b6110bd5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610825565b6001600160a01b0390811660009081526004602090815260408083208b8516808552908352928190208a905551898152919350918a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b60008281526006602052604090206001015461114381611161565b61074f838361129c565b6060600061115a836113ef565b9392505050565b61116b813361144b565b50565b600061117a8383610aa0565b6111fa5760008381526006602090815260408083206001600160a01b03861684529091529020805460ff191660011790556111b23390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610539565b506000610539565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60006040516112349190611b0c565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b60006112a88383610aa0565b156111fa5760008381526006602090815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610539565b806002600082825461131b9190611b82565b90915550506001600160a01b038216600081815260036020908152604080832080548601905551848152600080516020611bc283398151915291015b60405180910390a35050565b6001600160a01b0382166000908152600360205260408120805483929061138b9084906119c4565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611bc283398151915290602001611357565b600061115a836001600160a01b038416611484565b600061115a836001600160a01b0384166114cb565b60608160000180548060200260200160405190810160405280929190818152602001828054801561143f57602002820191906000526020600020905b81548152602001906001019080831161142b575b50505050509050919050565b6114558282610aa0565b6108385760405163e2517d3f60e01b81526001600160a01b038216600482015260248101839052604401610825565b60008181526001830160205260408120546111fa57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610539565b600081815260018301602052604081205480156115b45760006114ef6001836119c4565b8554909150600090611503906001906119c4565b905080821461156857600086600001828154811061152357611523611b95565b906000526020600020015490508087600001848154811061154657611546611b95565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061157957611579611bab565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610539565b6000915050610539565b5080546115ca90611974565b6000825580601f106115da575050565b601f01602090049060005260206000209081019061116b91905b8082111561160857600081556001016115f4565b5090565b60006020828403121561161e57600080fd5b81356001600160e01b03198116811461115a57600080fd5b6000815180845260005b8181101561165c57602081850181015186830182015201611640565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061115a6020830184611636565b80356001600160a01b03811681146116a657600080fd5b919050565b600080604083850312156116be57600080fd5b6116c78361168f565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b818110156117165783516001600160a01b0316835292840192918401916001016116f1565b50909695505050505050565b60008060006060848603121561173757600080fd5b6117408461168f565b925061174e6020850161168f565b9150604084013590509250925092565b60006020828403121561177057600080fd5b5035919050565b6000806040838503121561178a57600080fd5b8235915061179a6020840161168f565b90509250929050565b6000602082840312156117b557600080fd5b61115a8261168f565b80356001600160801b03811681146116a657600080fd5b600080600080606085870312156117eb57600080fd5b6117f48561168f565b9350602085013567ffffffffffffffff8082111561181157600080fd5b818701915087601f83011261182557600080fd5b81358181111561183457600080fd5b88602082850101111561184657600080fd5b60208301955080945050505061185e604086016117be565b905092959194509250565b6000806040838503121561187c57600080fd5b6118858361168f565b915061179a602084016117be565b6020815260006001600160801b038084511660208401528060208501511660408401525060408301516060808401526118cf6080840182611636565b949350505050565b600080600080600080600060e0888a0312156118f257600080fd5b6118fb8861168f565b96506119096020890161168f565b95506040880135945060608801359350608088013560ff8116811461192d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561195d57600080fd5b6119668361168f565b915061179a6020840161168f565b600181811c9082168061198857607f821691505b6020821081036119a857634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b81810381811115610539576105396119ae565b634e487b7160e01b600052604160045260246000fd5b601f8211156107de57600081815260208120601f850160051c81016020861015611a145750805b601f850160051c820191505b81811015611a3357828155600101611a20565b505050505050565b67ffffffffffffffff831115611a5357611a536119d7565b611a6783611a618354611974565b836119ed565b6000601f841160018114611a9b5760008515611a835750838201355b600019600387901b1c1916600186901b178355611af5565b600083815260209020601f19861690835b82811015611acc5786850135825560209485019460019092019101611aac565b5086821015611ae95760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b8183823760009101908152919050565b6000808354611b1a81611974565b60018281168015611b325760018114611b4757611b76565b60ff1984168752821515830287019450611b76565b8760005260208060002060005b85811015611b6d5781548a820152908401908201611b54565b50505082870194505b50929695505050505050565b80820180821115610539576105396119ae565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa26469706673582212207bb958766a386c33d32f68c642776586d22807dfadf320be4be3635b30af7fef64736f6c63430008140033";

type TestGhoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestGhoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestGho__factory extends ContractFactory {
  constructor(...args: TestGhoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    admin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(admin, overrides || {});
  }
  override deploy(
    admin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(admin, overrides || {}) as Promise<
      TestGho & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestGho__factory {
    return super.connect(runner) as TestGho__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestGhoInterface {
    return new Interface(_abi) as TestGhoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TestGho {
    return new Contract(address, _abi, runner) as unknown as TestGho;
  }
}