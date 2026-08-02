import React, { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyinfo'
import { Currency } from 'lucide-react'
const App = () => {
    const [amount, setAmount] = useState(0)
    const [from, setFrom] = useState("usd")
    const [to, setTo] = useState("inr")
    const [convertedAmount, setConvertedAmount] = useState(0)
    const currencyInfo = useCurrencyInfo(from)

    const options = Object.keys(currencyInfo);
    // console.log(options);
    // console.log(currencyInfo);
    const swap = () => {
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }
    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to]);
    }
    //   console.log(amount);
    //   console.log(to);
    //   console.log(currencyInfo[to]);



    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: 'https://tse2.mm.bing.net/th/id/OIP.yvD9HJrN3BDlmYuszI6nyAHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3',
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyoption={options}
                                onCurrencychangee={(currency) => setAmount(currency)}
                                setectionCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyoption={options}
                                onCurrencychange={
                                    (currency) => setTo(currency)}
                                setectionCurrency={from}
                                amoutDisble

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App
