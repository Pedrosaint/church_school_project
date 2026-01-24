import { useState } from "react";

const SupportMinistry = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tithe");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [fullName, setFullName] = useState("");
  const [giveAnonymously, setGiveAnonymously] = useState(false);
  const [optionalNote, setOptionalNote] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const categories = ["Tithe", "Offering", "Thanksgiving", "Special project"];
  const amounts = ["₦1000", "₦2000", "₦3000", "₦4000"];

  return (
    <div className="bg-gray-50 py-12 px-4 mt-25 md:mt-30">
      <div className="container mx-auto">
        {/* Header */}
        <div className="md:text-center mb-8">
          <h1 className="text-4xl md:text-4xl font-semibold text-gray-900 mb-3">
            Support the Ministry-Give Online
          </h1>
          <p className="text-gray-600 font-inter">
            Your generous contribution helps us advance our mission to spread
            the gospel
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 md:p-10 font-inter">
          {/* Choose Your Giving Category */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              Choose Your Giving Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 bg-gray-200 p-2 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`py-3 px-4 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedCategory === category
                      ? "bg-gray-50  text-[#D4A34A] shadow-md"
                      : "text-gray-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Select Amount */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              Select Amount
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {amounts.map((amount, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`py-3 px-4 rounded-lg font-medium transition-all cursor-pointer ${
                    selectedAmount === amount
                      ? "bg-white border-2 border-[#D4a34a] text-gray-600 shadow-md"
                      : "text-gray-700 border-2 border-gray-200"
                  }`}
                >
                  {amount}
                </button>
              ))}
              <input
                type="text"
                placeholder="Enter Amount"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedAmount("₦" + e.target.value);
                }}
                className="py-3 px-4 border-2 border-gray-200 rounded-lg outline-none transition-all"
              />
            </div>
          </div>

          {/* Full Name and Optional Note */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Full Name */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                placeholder="Enter Full Name"
                onChange={(e) => setFullName(e.target.value)}
                className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-all"
                disabled={giveAnonymously}
              />
              <div className="flex items-center mt-3">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={giveAnonymously}
                  onChange={(e) => setGiveAnonymously(e.target.checked)}
                  className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-500"
                />
                <label htmlFor="anonymous" className="ml-2 text-gray-700">
                  Give Anonymously
                </label>
              </div>
            </div>

            {/* Optional Note */}
            <div>
              <label className="block text-gray-900 font-medium mb-2">
                Optional Note
              </label>
              <textarea
                value={optionalNote}
                onChange={(e) => setOptionalNote(e.target.value)}
                rows={4}
                className="w-full py-3 px-4 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-all resize-none"
              ></textarea>
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <h2 className="text-2xl font-bold text-gray-600 mb-4">
              Payment Method
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Left Column */}
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-amber-500 transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="debit"
                    checked={paymentMethod === "debit"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-amber-500"
                  />
                  <span className="ml-3 text-gray-900">Debit/Credit Card</span>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-amber-500 transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="ussd"
                    checked={paymentMethod === "ussd"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-amber-500"
                  />
                  <span className="ml-3 text-gray-900">USSD</span>
                </label>
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-amber-500 transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-amber-500"
                  />
                  <span className="ml-3 text-gray-900">Bank Transfer</span>
                </label>

                <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-amber-500 transition-all">
                  <input
                    type="radio"
                    name="payment"
                    value="direct"
                    checked={paymentMethod === "direct"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-amber-500"
                  />
                  <span className="ml-3 text-gray-900">
                    Direct Bank Deposit
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportMinistry;
