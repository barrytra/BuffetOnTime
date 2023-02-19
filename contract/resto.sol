// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Resto is ERC20 {
    constructor() ERC20("BFC", "BFC") {  
    }
    function mint(address to) public {
        _mint(to, 10000000000000000000);
    }
}
