export const FUND_CONTRACT = {
  _format: "hh-sol-artifact-1",
  contractName: "FundContract",
  sourceName: "contracts/FundContract.sol",
  abi: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_description",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_balance",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "_recipientName",
          type: "string",
        },
        {
          internalType: "address",
          name: "_recipientAddress",
          type: "address",
        },
        {
          internalType: "string",
          name: "_cid",
          type: "string",
        },
        {
          internalType: "string",
          name: "_network",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "attestationId",
          type: "string",
        },
      ],
      name: "FundVerified",
      type: "event",
    },
    {
      inputs: [],
      name: "getMetadata",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "network",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "createdAt",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "recipientName",
              type: "string",
            },
            {
              internalType: "address",
              name: "recipientAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "cid",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "validatedAt",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "attestationId",
              type: "string",
            },
          ],
          internalType: "struct FundContract.Metadata",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "getOwner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_attestationId",
          type: "string",
        },
      ],
      name: "validate",
      outputs: [
        {
          components: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "string",
              name: "network",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "createdAt",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "description",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "recipientName",
              type: "string",
            },
            {
              internalType: "address",
              name: "recipientAddress",
              type: "address",
            },
            {
              internalType: "string",
              name: "cid",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "validatedAt",
              type: "uint256",
            },
            {
              internalType: "string",
              name: "attestationId",
              type: "string",
            },
          ],
          internalType: "struct FundContract.Metadata",
          name: "",
          type: "tuple",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  bytecode:
    "0x60806040523480156200001157600080fd5b5060405162001d6c38038062001d6c833981810160405281019062000037919062000483565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518061016001604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020014281526020018881526020018781526020018681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018381526020016000815260200160405180602001604052806000815250815250600160008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190816200015f919062000812565b5060408201518160020155606082015181600301908162000181919062000812565b50608082015181600401908162000199919062000812565b5060a0820151816005015560c0820151816006019081620001bb919062000812565b5060e08201518160070160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101008201518160080190816200021b919062000812565b50610120820151816009015561014082015181600a0190816200023f919062000812565b5090505050505050505050620008f9565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002b9826200026e565b810181811067ffffffffffffffff82111715620002db57620002da6200027f565b5b80604052505050565b6000620002f062000250565b9050620002fe8282620002ae565b919050565b600067ffffffffffffffff8211156200032157620003206200027f565b5b6200032c826200026e565b9050602081019050919050565b60005b83811015620003595780820151818401526020810190506200033c565b60008484015250505050565b60006200037c620003768462000303565b620002e4565b9050828152602081018484840111156200039b576200039a62000269565b5b620003a884828562000339565b509392505050565b600082601f830112620003c857620003c762000264565b5b8151620003da84826020860162000365565b91505092915050565b6000819050919050565b620003f881620003e3565b81146200040457600080fd5b50565b6000815190506200041881620003ed565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200044b826200041e565b9050919050565b6200045d816200043e565b81146200046957600080fd5b50565b6000815190506200047d8162000452565b92915050565b600080600080600080600060e0888a031215620004a557620004a46200025a565b5b600088015167ffffffffffffffff811115620004c657620004c56200025f565b5b620004d48a828b01620003b0565b975050602088015167ffffffffffffffff811115620004f857620004f76200025f565b5b620005068a828b01620003b0565b9650506040620005198a828b0162000407565b955050606088015167ffffffffffffffff8111156200053d576200053c6200025f565b5b6200054b8a828b01620003b0565b94505060806200055e8a828b016200046c565b93505060a088015167ffffffffffffffff8111156200058257620005816200025f565b5b620005908a828b01620003b0565b92505060c088015167ffffffffffffffff811115620005b457620005b36200025f565b5b620005c28a828b01620003b0565b91505092959891949750929550565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200062457607f821691505b6020821081036200063a5762000639620005dc565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620006a47fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000665565b620006b0868362000665565b95508019841693508086168417925050509392505050565b6000819050919050565b6000620006f3620006ed620006e784620003e3565b620006c8565b620003e3565b9050919050565b6000819050919050565b6200070f83620006d2565b620007276200071e82620006fa565b84845462000672565b825550505050565b600090565b6200073e6200072f565b6200074b81848462000704565b505050565b5b8181101562000773576200076760008262000734565b60018101905062000751565b5050565b601f821115620007c2576200078c8162000640565b620007978462000655565b81016020851015620007a7578190505b620007bf620007b68562000655565b83018262000750565b50505b505050565b600082821c905092915050565b6000620007e760001984600802620007c7565b1980831691505092915050565b6000620008028383620007d4565b9150826002028217905092915050565b6200081d82620005d1565b67ffffffffffffffff8111156200083957620008386200027f565b5b6200084582546200060b565b6200085282828562000777565b600060209050601f8311600181146200088a576000841562000875578287015190505b620008818582620007f4565b865550620008f1565b601f1984166200089a8662000640565b60005b82811015620008c4578489015182556001820191506020850194506020810190506200089d565b86831015620008e45784890151620008e0601f891682620007d4565b8355505b6001600288020188555050505b505050505050565b61146380620009096000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637a5b4f5914610046578063893d20e814610064578063d182b83b14610082575b600080fd5b61004e6100b2565b60405161005b9190610d9b565b60405180910390f35b61006c610503565b6040516100799190610dcc565b60405180910390f35b61009c60048036038101906100979190610f30565b61052c565b6040516100a99190610d9b565b60405180910390f35b6100ba610b19565b6001604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461012e90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461015a90610fa8565b80156101a75780601f1061017c576101008083540402835291602001916101a7565b820191906000526020600020905b81548152906001019060200180831161018a57829003601f168201915b50505050508152602001600282015481526020016003820180546101ca90610fa8565b80601f01602080910402602001604051908101604052809291908181526020018280546101f690610fa8565b80156102435780601f1061021857610100808354040283529160200191610243565b820191906000526020600020905b81548152906001019060200180831161022657829003601f168201915b5050505050815260200160048201805461025c90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461028890610fa8565b80156102d55780601f106102aa576101008083540402835291602001916102d5565b820191906000526020600020905b8154815290600101906020018083116102b857829003601f168201915b50505050508152602001600582015481526020016006820180546102f890610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461032490610fa8565b80156103715780601f1061034657610100808354040283529160200191610371565b820191906000526020600020905b81548152906001019060200180831161035457829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016008820180546103e090610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461040c90610fa8565b80156104595780601f1061042e57610100808354040283529160200191610459565b820191906000526020600020905b81548152906001019060200180831161043c57829003601f168201915b5050505050815260200160098201548152602001600a8201805461047c90610fa8565b80601f01602080910402602001604051908101604052809291908181526020018280546104a890610fa8565b80156104f55780601f106104ca576101008083540402835291602001916104f5565b820191906000526020600020905b8154815290600101906020018083116104d857829003601f168201915b505050505081525050905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610534610b19565b60003373ffffffffffffffffffffffffffffffffffffffff1631905060006001600501549050600160070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e49061105c565b60405180910390fd5b80821015610630576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610627906110c8565b60405180910390fd5b600060016009015414610678576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066f90611134565b60405180910390fd5b42600160090181905550836001600a0190816106949190611300565b507fba0b6a5066b6f241ed188c4a1c886d383933a5f79088b468808198c01da0cf70846040516106c4919061140b565b60405180910390a16001604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461074090610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461076c90610fa8565b80156107b95780601f1061078e576101008083540402835291602001916107b9565b820191906000526020600020905b81548152906001019060200180831161079c57829003601f168201915b50505050508152602001600282015481526020016003820180546107dc90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461080890610fa8565b80156108555780601f1061082a57610100808354040283529160200191610855565b820191906000526020600020905b81548152906001019060200180831161083857829003601f168201915b5050505050815260200160048201805461086e90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461089a90610fa8565b80156108e75780601f106108bc576101008083540402835291602001916108e7565b820191906000526020600020905b8154815290600101906020018083116108ca57829003601f168201915b505050505081526020016005820154815260200160068201805461090a90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461093690610fa8565b80156109835780601f1061095857610100808354040283529160200191610983565b820191906000526020600020905b81548152906001019060200180831161096657829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016008820180546109f290610fa8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1e90610fa8565b8015610a6b5780601f10610a4057610100808354040283529160200191610a6b565b820191906000526020600020905b815481529060010190602001808311610a4e57829003601f168201915b5050505050815260200160098201548152602001600a82018054610a8e90610fa8565b80601f0160208091040260200160405190810160405280929190818152602001828054610aba90610fa8565b8015610b075780601f10610adc57610100808354040283529160200191610b07565b820191906000526020600020905b815481529060010190602001808311610aea57829003601f168201915b50505050508152505092505050919050565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000815260200160608152602001606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001606081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bca82610b9f565b9050919050565b610bda81610bbf565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c1a578082015181840152602081019050610bff565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c4282610be0565b610c4c8185610beb565b9350610c5c818560208601610bfc565b610c6581610c26565b840191505092915050565b6000819050919050565b610c8381610c70565b82525050565b600061016083016000830151610ca26000860182610bd1565b5060208301518482036020860152610cba8282610c37565b9150506040830151610ccf6040860182610c7a565b5060608301518482036060860152610ce78282610c37565b91505060808301518482036080860152610d018282610c37565b91505060a0830151610d1660a0860182610c7a565b5060c083015184820360c0860152610d2e8282610c37565b91505060e0830151610d4360e0860182610bd1565b50610100830151848203610100860152610d5d8282610c37565b915050610120830151610d74610120860182610c7a565b50610140830151848203610140860152610d8e8282610c37565b9150508091505092915050565b60006020820190508181036000830152610db58184610c89565b905092915050565b610dc681610bbf565b82525050565b6000602082019050610de16000830184610dbd565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e3d82610c26565b810181811067ffffffffffffffff82111715610e5c57610e5b610e05565b5b80604052505050565b6000610e6f610de7565b9050610e7b8282610e34565b919050565b600067ffffffffffffffff821115610e9b57610e9a610e05565b5b610ea482610c26565b9050602081019050919050565b82818337600083830152505050565b6000610ed3610ece84610e80565b610e65565b905082815260208101848484011115610eef57610eee610e00565b5b610efa848285610eb1565b509392505050565b600082601f830112610f1757610f16610dfb565b5b8135610f27848260208601610ec0565b91505092915050565b600060208284031215610f4657610f45610df1565b5b600082013567ffffffffffffffff811115610f6457610f63610df6565b5b610f7084828501610f02565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610fc057607f821691505b602082108103610fd357610fd2610f79565b5b50919050565b600082825260208201905092915050565b7f4f6e6c792074686520696e74656e64656420726563697069656e742063616e2060008201527f76616c69646174652074686569722062616c616e636500000000000000000000602082015250565b6000611046603683610fd9565b915061105182610fea565b604082019050919050565b6000602082019050818103600083015261107581611039565b9050919050565b7f42616c616e6365206973206c657373207468616e206578706563746564000000600082015250565b60006110b2601d83610fd9565b91506110bd8261107c565b602082019050919050565b600060208201905081810360008301526110e1816110a5565b9050919050565b7f42616c616e636520616c72656164792076616c69646174656400000000000000600082015250565b600061111e601983610fd9565b9150611129826110e8565b602082019050919050565b6000602082019050818103600083015261114d81611111565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026111b67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611179565b6111c08683611179565b95508019841693508086168417925050509392505050565b6000819050919050565b60006111fd6111f86111f384610c70565b6111d8565b610c70565b9050919050565b6000819050919050565b611217836111e2565b61122b61122382611204565b848454611186565b825550505050565b600090565b611240611233565b61124b81848461120e565b505050565b5b8181101561126f57611264600082611238565b600181019050611251565b5050565b601f8211156112b45761128581611154565b61128e84611169565b8101602085101561129d578190505b6112b16112a985611169565b830182611250565b50505b505050565b600082821c905092915050565b60006112d7600019846008026112b9565b1980831691505092915050565b60006112f083836112c6565b9150826002028217905092915050565b61130982610be0565b67ffffffffffffffff81111561132257611321610e05565b5b61132c8254610fa8565b611337828285611273565b600060209050601f83116001811461136a5760008415611358578287015190505b61136285826112e4565b8655506113ca565b601f19841661137886611154565b60005b828110156113a05784890151825560018201915060208501945060208101905061137b565b868310156113bd57848901516113b9601f8916826112c6565b8355505b6001600288020188555050505b505050505050565b60006113dd82610be0565b6113e78185610fd9565b93506113f7818560208601610bfc565b61140081610c26565b840191505092915050565b6000602082019050818103600083015261142581846113d2565b90509291505056fea2646970667358221220e0df6a37a2cdecdf4334c5a4f7a0be33b81a5a88dea6ef4af594c494068b797c64736f6c63430008180033",
  deployedBytecode:
    "0x608060405234801561001057600080fd5b50600436106100415760003560e01c80637a5b4f5914610046578063893d20e814610064578063d182b83b14610082575b600080fd5b61004e6100b2565b60405161005b9190610d9b565b60405180910390f35b61006c610503565b6040516100799190610dcc565b60405180910390f35b61009c60048036038101906100979190610f30565b61052c565b6040516100a99190610d9b565b60405180910390f35b6100ba610b19565b6001604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461012e90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461015a90610fa8565b80156101a75780601f1061017c576101008083540402835291602001916101a7565b820191906000526020600020905b81548152906001019060200180831161018a57829003601f168201915b50505050508152602001600282015481526020016003820180546101ca90610fa8565b80601f01602080910402602001604051908101604052809291908181526020018280546101f690610fa8565b80156102435780601f1061021857610100808354040283529160200191610243565b820191906000526020600020905b81548152906001019060200180831161022657829003601f168201915b5050505050815260200160048201805461025c90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461028890610fa8565b80156102d55780601f106102aa576101008083540402835291602001916102d5565b820191906000526020600020905b8154815290600101906020018083116102b857829003601f168201915b50505050508152602001600582015481526020016006820180546102f890610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461032490610fa8565b80156103715780601f1061034657610100808354040283529160200191610371565b820191906000526020600020905b81548152906001019060200180831161035457829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016008820180546103e090610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461040c90610fa8565b80156104595780601f1061042e57610100808354040283529160200191610459565b820191906000526020600020905b81548152906001019060200180831161043c57829003601f168201915b5050505050815260200160098201548152602001600a8201805461047c90610fa8565b80601f01602080910402602001604051908101604052809291908181526020018280546104a890610fa8565b80156104f55780601f106104ca576101008083540402835291602001916104f5565b820191906000526020600020905b8154815290600101906020018083116104d857829003601f168201915b505050505081525050905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610534610b19565b60003373ffffffffffffffffffffffffffffffffffffffff1631905060006001600501549050600160070160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146105ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105e49061105c565b60405180910390fd5b80821015610630576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610627906110c8565b60405180910390fd5b600060016009015414610678576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066f90611134565b60405180910390fd5b42600160090181905550836001600a0190816106949190611300565b507fba0b6a5066b6f241ed188c4a1c886d383933a5f79088b468808198c01da0cf70846040516106c4919061140b565b60405180910390a16001604051806101600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200160018201805461074090610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461076c90610fa8565b80156107b95780601f1061078e576101008083540402835291602001916107b9565b820191906000526020600020905b81548152906001019060200180831161079c57829003601f168201915b50505050508152602001600282015481526020016003820180546107dc90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461080890610fa8565b80156108555780601f1061082a57610100808354040283529160200191610855565b820191906000526020600020905b81548152906001019060200180831161083857829003601f168201915b5050505050815260200160048201805461086e90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461089a90610fa8565b80156108e75780601f106108bc576101008083540402835291602001916108e7565b820191906000526020600020905b8154815290600101906020018083116108ca57829003601f168201915b505050505081526020016005820154815260200160068201805461090a90610fa8565b80601f016020809104026020016040519081016040528092919081815260200182805461093690610fa8565b80156109835780601f1061095857610100808354040283529160200191610983565b820191906000526020600020905b81548152906001019060200180831161096657829003601f168201915b505050505081526020016007820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016008820180546109f290610fa8565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1e90610fa8565b8015610a6b5780601f10610a4057610100808354040283529160200191610a6b565b820191906000526020600020905b815481529060010190602001808311610a4e57829003601f168201915b5050505050815260200160098201548152602001600a82018054610a8e90610fa8565b80601f0160208091040260200160405190810160405280929190818152602001828054610aba90610fa8565b8015610b075780601f10610adc57610100808354040283529160200191610b07565b820191906000526020600020905b815481529060010190602001808311610aea57829003601f168201915b50505050508152505092505050919050565b604051806101600160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001606081526020016000815260200160608152602001606081526020016000815260200160608152602001600073ffffffffffffffffffffffffffffffffffffffff1681526020016060815260200160008152602001606081525090565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bca82610b9f565b9050919050565b610bda81610bbf565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c1a578082015181840152602081019050610bff565b60008484015250505050565b6000601f19601f8301169050919050565b6000610c4282610be0565b610c4c8185610beb565b9350610c5c818560208601610bfc565b610c6581610c26565b840191505092915050565b6000819050919050565b610c8381610c70565b82525050565b600061016083016000830151610ca26000860182610bd1565b5060208301518482036020860152610cba8282610c37565b9150506040830151610ccf6040860182610c7a565b5060608301518482036060860152610ce78282610c37565b91505060808301518482036080860152610d018282610c37565b91505060a0830151610d1660a0860182610c7a565b5060c083015184820360c0860152610d2e8282610c37565b91505060e0830151610d4360e0860182610bd1565b50610100830151848203610100860152610d5d8282610c37565b915050610120830151610d74610120860182610c7a565b50610140830151848203610140860152610d8e8282610c37565b9150508091505092915050565b60006020820190508181036000830152610db58184610c89565b905092915050565b610dc681610bbf565b82525050565b6000602082019050610de16000830184610dbd565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610e3d82610c26565b810181811067ffffffffffffffff82111715610e5c57610e5b610e05565b5b80604052505050565b6000610e6f610de7565b9050610e7b8282610e34565b919050565b600067ffffffffffffffff821115610e9b57610e9a610e05565b5b610ea482610c26565b9050602081019050919050565b82818337600083830152505050565b6000610ed3610ece84610e80565b610e65565b905082815260208101848484011115610eef57610eee610e00565b5b610efa848285610eb1565b509392505050565b600082601f830112610f1757610f16610dfb565b5b8135610f27848260208601610ec0565b91505092915050565b600060208284031215610f4657610f45610df1565b5b600082013567ffffffffffffffff811115610f6457610f63610df6565b5b610f7084828501610f02565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610fc057607f821691505b602082108103610fd357610fd2610f79565b5b50919050565b600082825260208201905092915050565b7f4f6e6c792074686520696e74656e64656420726563697069656e742063616e2060008201527f76616c69646174652074686569722062616c616e636500000000000000000000602082015250565b6000611046603683610fd9565b915061105182610fea565b604082019050919050565b6000602082019050818103600083015261107581611039565b9050919050565b7f42616c616e6365206973206c657373207468616e206578706563746564000000600082015250565b60006110b2601d83610fd9565b91506110bd8261107c565b602082019050919050565b600060208201905081810360008301526110e1816110a5565b9050919050565b7f42616c616e636520616c72656164792076616c69646174656400000000000000600082015250565b600061111e601983610fd9565b9150611129826110e8565b602082019050919050565b6000602082019050818103600083015261114d81611111565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026111b67fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82611179565b6111c08683611179565b95508019841693508086168417925050509392505050565b6000819050919050565b60006111fd6111f86111f384610c70565b6111d8565b610c70565b9050919050565b6000819050919050565b611217836111e2565b61122b61122382611204565b848454611186565b825550505050565b600090565b611240611233565b61124b81848461120e565b505050565b5b8181101561126f57611264600082611238565b600181019050611251565b5050565b601f8211156112b45761128581611154565b61128e84611169565b8101602085101561129d578190505b6112b16112a985611169565b830182611250565b50505b505050565b600082821c905092915050565b60006112d7600019846008026112b9565b1980831691505092915050565b60006112f083836112c6565b9150826002028217905092915050565b61130982610be0565b67ffffffffffffffff81111561132257611321610e05565b5b61132c8254610fa8565b611337828285611273565b600060209050601f83116001811461136a5760008415611358578287015190505b61136285826112e4565b8655506113ca565b601f19841661137886611154565b60005b828110156113a05784890151825560018201915060208501945060208101905061137b565b868310156113bd57848901516113b9601f8916826112c6565b8355505b6001600288020188555050505b505050505050565b60006113dd82610be0565b6113e78185610fd9565b93506113f7818560208601610bfc565b61140081610c26565b840191505092915050565b6000602082019050818103600083015261142581846113d2565b90509291505056fea2646970667358221220e0df6a37a2cdecdf4334c5a4f7a0be33b81a5a88dea6ef4af594c494068b797c64736f6c63430008180033",
  linkReferences: {},
  deployedLinkReferences: {},
};
