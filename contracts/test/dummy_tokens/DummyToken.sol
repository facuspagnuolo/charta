pragma solidity ^0.4.18;

import "zos-lib/contracts/Initializable.sol";
import "openzeppelin-zos/contracts/math/SafeMath.sol";
import "openzeppelin-zos/contracts/ownership/Ownable.sol";
import "openzeppelin-zos/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-zos/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-zos/contracts/token/ERC20/ERC20Burnable.sol";


contract DummyToken is Initializable, Ownable, ERC20Detailed, ERC20Mintable, ERC20Burnable {
    using SafeMath for uint;
    string public name;
    string public symbol;
    uint public decimals;

    function initialize(
        string _name,
        string _symbol,
        uint8 _decimals,
        uint _totalSupply,
        address[] _initialBalanceHolders,
        address _sender
    )
        public
    {
        Ownable.initialize(_sender);
        ERC20Detailed.initialize(_name, _symbol, _decimals);
        ERC20Mintable.initialize(_sender);

        uint numInitialBalanceHolders = _initialBalanceHolders.length;

        // Distribute the total supply evenly among the initial balance holders
        for (uint i = 0; i < numInitialBalanceHolders; i++) {
            address account = _initialBalanceHolders[i];
            uint256 balance = _totalSupply / numInitialBalanceHolders;
            _mint(account, balance);
        }
    }

    function setBalance(address _target, uint _value) public onlyOwner {
        uint currBalance = balanceOf(_target);
        if (_value < currBalance) {
            _burn(_target, currBalance.sub(_value));
        }
        else {
            _mint(_target, _value.sub(currBalance));
        }
    }
}
