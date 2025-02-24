"use client";
import { motion } from "framer-motion";
import { useState } from "react";

// Comprehensive list of country codes
const countryOptions = [
  { value: "+93", label: "🇦🇫 Afghanistan (+93)" },
  { value: "+355", label: "🇦🇱 Albania (+355)" },
  { value: "+213", label: "🇩🇿 Algeria (+213)" },
  { value: "+376", label: "🇦🇩 Andorra (+376)" },
  { value: "+244", label: "🇦🇴 Angola (+244)" },
  { value: "+54", label: "🇦🇷 Argentina (+54)" },
  { value: "+374", label: "🇦🇲 Armenia (+374)" },
  { value: "+61", label: "🇦🇺 Australia (+61)" },
  { value: "+43", label: "🇦🇹 Austria (+43)" },
  { value: "+994", label: "🇦🇿 Azerbaijan (+994)" },
  { value: "+973", label: "🇧🇭 Bahrain (+973)" },
  { value: "+880", label: "🇧🇩 Bangladesh (+880)" },
  { value: "+375", label: "🇧🇾 Belarus (+375)" },
  { value: "+32", label: "🇧🇪 Belgium (+32)" },
  { value: "+501", label: "🇧🇿 Belize (+501)" },
  { value: "+229", label: "🇧🇯 Benin (+229)" },
  { value: "+975", label: "🇧🇹 Bhutan (+975)" },
  { value: "+591", label: "🇧🇴 Bolivia (+591)" },
  { value: "+387", label: "🇧🇦 Bosnia and Herzegovina (+387)" },
  { value: "+267", label: "🇧🇼 Botswana (+267)" },
  { value: "+55", label: "🇧🇷 Brazil (+55)" },
  { value: "+673", label: "🇧🇳 Brunei (+673)" },
  { value: "+359", label: "🇧🇬 Bulgaria (+359)" },
  { value: "+226", label: "🇧🇫 Burkina Faso (+226)" },
  { value: "+257", label: "🇧🇮 Burundi (+257)" },
  { value: "+855", label: "🇰🇭 Cambodia (+855)" },
  { value: "+237", label: "🇨🇲 Cameroon (+237)" },
  { value: "+1", label: "🇨🇦 Canada (+1)" },
  { value: "+238", label: "🇨🇻 Cape Verde (+238)" },
  { value: "+236", label: "🇨🇫 Central African Republic (+236)" },
  { value: "+235", label: "🇹🇩 Chad (+235)" },
  { value: "+56", label: "🇨🇱 Chile (+56)" },
  { value: "+86", label: "🇨🇳 China (+86)" },
  { value: "+57", label: "🇨🇴 Colombia (+57)" },
  { value: "+269", label: "🇰🇲 Comoros (+269)" },
  { value: "+243", label: "🇨🇩 Congo (DRC) (+243)" },
  { value: "+242", label: "🇨🇬 Congo (Republic) (+242)" },
  { value: "+506", label: "🇨🇷 Costa Rica (+506)" },
  { value: "+385", label: "🇭🇷 Croatia (+385)" },
  { value: "+53", label: "🇨🇺 Cuba (+53)" },
  { value: "+357", label: "🇨🇾 Cyprus (+357)" },
  { value: "+420", label: "🇨🇿 Czech Republic (+420)" },
  { value: "+45", label: "🇩🇰 Denmark (+45)" },
  { value: "+253", label: "🇩🇯 Djibouti (+253)" },
  { value: "+1-767", label: "🇩🇲 Dominica (+1-767)" },
  { value: "+1-809", label: "🇩🇴 Dominican Republic (+1-809)" },
  { value: "+593", label: "🇪🇨 Ecuador (+593)" },
  { value: "+20", label: "🇪🇬 Egypt (+20)" },
  { value: "+503", label: "🇸🇻 El Salvador (+503)" },
  { value: "+240", label: "🇬🇶 Equatorial Guinea (+240)" },
  { value: "+291", label: "🇪🇷 Eritrea (+291)" },
  { value: "+372", label: "🇪🇪 Estonia (+372)" },
  { value: "+251", label: "🇪🇹 Ethiopia (+251)" },
  { value: "+679", label: "🇫🇯 Fiji (+679)" },
  { value: "+358", label: "🇫🇮 Finland (+358)" },
  { value: "+33", label: "🇫🇷 France (+33)" },
  { value: "+241", label: "🇬🇦 Gabon (+241)" },
  { value: "+220", label: "🇬🇲 Gambia (+220)" },
  { value: "+995", label: "🇬🇪 Georgia (+995)" },
  { value: "+49", label: "🇩🇪 Germany (+49)" },
  { value: "+233", label: "🇬🇭 Ghana (+233)" },
  { value: "+30", label: "🇬🇷 Greece (+30)" },
  { value: "+502", label: "🇬🇹 Guatemala (+502)" },
  { value: "+224", label: "🇬🇳 Guinea (+224)" },
  { value: "+245", label: "🇬🇼 Guinea-Bissau (+245)" },
  { value: "+592", label: "🇬🇾 Guyana (+592)" },
  { value: "+509", label: "🇭🇹 Haiti (+509)" },
  { value: "+504", label: "🇭🇳 Honduras (+504)" },
  { value: "+36", label: "🇭🇺 Hungary (+36)" },
  { value: "+354", label: "🇮🇸 Iceland (+354)" },
  { value: "+91", label: "🇮🇳 India (+91)" },
  { value: "+62", label: "🇮🇩 Indonesia (+62)" },
  { value: "+98", label: "🇮🇷 Iran (+98)" },
  { value: "+964", label: "🇮🇶 Iraq (+964)" },
  { value: "+353", label: "🇮🇪 Ireland (+353)" },
  { value: "+972", label: "🇮🇱 Israel (+972)" },
  { value: "+39", label: "🇮🇹 Italy (+39)" },
  { value: "+225", label: "🇨🇮 Ivory Coast (+225)" },
  { value: "+1-876", label: "🇯🇲 Jamaica (+1-876)" },
  { value: "+81", label: "🇯🇵 Japan (+81)" },
  { value: "+962", label: "🇯🇴 Jordan (+962)" },
  { value: "+7", label: "🇰🇿 Kazakhstan (+7)" },
  { value: "+254", label: "🇰🇪 Kenya (+254)" },
  { value: "+686", label: "🇰🇮 Kiribati (+686)" },
  { value: "+965", label: "🇰🇼 Kuwait (+965)" },
  { value: "+996", label: "🇰🇬 Kyrgyzstan (+996)" },
  { value: "+856", label: "🇱🇦 Laos (+856)" },
  { value: "+371", label: "🇱🇻 Latvia (+371)" },
  { value: "+961", label: "🇱🇧 Lebanon (+961)" },
  { value: "+266", label: "🇱🇸 Lesotho (+266)" },
  { value: "+231", label: "🇱🇷 Liberia (+231)" },
  { value: "+218", label: "🇱🇾 Libya (+218)" },
  { value: "+423", label: "🇱🇮 Liechtenstein (+423)" },
  { value: "+370", label: "🇱🇹 Lithuania (+370)" },
  { value: "+352", label: "🇱🇺 Luxembourg (+352)" },
  { value: "+261", label: "🇲🇬 Madagascar (+261)" },
  { value: "+265", label: "🇲🇼 Malawi (+265)" },
  { value: "+60", label: "🇲🇾 Malaysia (+60)" },
  { value: "+960", label: "🇲🇻 Maldives (+960)" },
  { value: "+223", label: "🇲🇱 Mali (+223)" },
  { value: "+356", label: "🇲🇹 Malta (+356)" },
  { value: "+692", label: "🇲🇭 Marshall Islands (+692)" },
  { value: "+222", label: "🇲🇷 Mauritania (+222)" },
  { value: "+230", label: "🇲🇺 Mauritius (+230)" },
  { value: "+52", label: "🇲🇽 Mexico (+52)" },
  { value: "+691", label: "🇫🇲 Micronesia (+691)" },
  { value: "+373", label: "🇲🇩 Moldova (+373)" },
  { value: "+377", label: "🇲🇨 Monaco (+377)" },
  { value: "+976", label: "🇲🇳 Mongolia (+976)" },
  { value: "+382", label: "🇲🇪 Montenegro (+382)" },
  { value: "+212", label: "🇲🇦 Morocco (+212)" },
  { value: "+258", label: "🇲🇿 Mozambique (+258)" },
  { value: "+95", label: "🇲🇲 Myanmar (+95)" },
  { value: "+264", label: "🇳🇦 Namibia (+264)" },
  { value: "+674", label: "🇳🇷 Nauru (+674)" },
  { value: "+977", label: "🇳🇵 Nepal (+977)" },
  { value: "+31", label: "🇳🇱 Netherlands (+31)" },
  { value: "+64", label: "🇳🇿 New Zealand (+64)" },
  { value: "+505", label: "🇳🇮 Nicaragua (+505)" },
  { value: "+227", label: "🇳🇪 Niger (+227)" },
  { value: "+234", label: "🇳🇬 Nigeria (+234)" },
  { value: "+850", label: "🇰🇵 North Korea (+850)" },
  { value: "+47", label: "🇳🇴 Norway (+47)" },
  { value: "+968", label: "🇴🇲 Oman (+968)" },
  { value: "+92", label: "🇵🇰 Pakistan (+92)" },
  { value: "+680", label: "🇵🇼 Palau (+680)" },
  { value: "+507", label: "🇵🇦 Panama (+507)" },
  { value: "+675", label: "🇵🇬 Papua New Guinea (+675)" },
  { value: "+595", label: "🇵🇾 Paraguay (+595)" },
  { value: "+51", label: "🇵🇪 Peru (+51)" },
  { value: "+63", label: "🇵🇭 Philippines (+63)" },
  { value: "+48", label: "🇵🇱 Poland (+48)" },
  { value: "+351", label: "🇵🇹 Portugal (+351)" },
  { value: "+974", label: "🇶🇦 Qatar (+974)" },
  { value: "+40", label: "🇷🇴 Romania (+40)" },
  { value: "+7", label: "🇷🇺 Russia (+7)" },
  { value: "+250", label: "🇷🇼 Rwanda (+250)" },
  { value: "+685", label: "🇼🇸 Samoa (+685)" },
  { value: "+378", label: "🇸🇲 San Marino (+378)" },
  { value: "+239", label: "🇸🇹 Sao Tome and Principe (+239)" },
  { value: "+966", label: "🇸🇦 Saudi Arabia (+966)" },
  { value: "+221", label: "🇸🇳 Senegal (+221)" },
  { value: "+381", label: "🇷🇸 Serbia (+381)" },
  { value: "+248", label: "🇸🇨 Seychelles (+248)" },
  { value: "+232", label: "🇸🇱 Sierra Leone (+232)" },
  { value: "+65", label: "🇸🇬 Singapore (+65)" },
  { value: "+421", label: "🇸🇰 Slovakia (+421)" },
  { value: "+386", label: "🇸🇮 Slovenia (+386)" },
  { value: "+677", label: "🇸🇧 Solomon Islands (+677)" },
  { value: "+252", label: "🇸🇴 Somalia (+252)" },
  { value: "+27", label: "🇿🇦 South Africa (+27)" },
  { value: "+82", label: "🇰🇷 South Korea (+82)" },
  { value: "+211", label: "🇸🇸 South Sudan (+211)" },
  { value: "+34", label: "🇪🇸 Spain (+34)" },
  { value: "+94", label: "🇱🇰 Sri Lanka (+94)" },
  { value: "+249", label: "🇸🇩 Sudan (+249)" },
  { value: "+597", label: "🇸🇷 Suriname (+597)" },
  { value: "+268", label: "🇸🇿 Swaziland (+268)" },
  { value: "+46", label: "🇸🇪 Sweden (+46)" },
  { value: "+41", label: "🇨🇭 Switzerland (+41)" },
  { value: "+963", label: "🇸🇾 Syria (+963)" },
  { value: "+886", label: "🇹🇼 Taiwan (+886)" },
  { value: "+992", label: "🇹🇯 Tajikistan (+992)" },
  { value: "+255", label: "🇹🇿 Tanzania (+255)" },
  { value: "+66", label: "🇹🇭 Thailand (+66)" },
  { value: "+228", label: "🇹🇬 Togo (+228)" },
  { value: "+676", label: "🇹🇴 Tonga (+676)" },
  { value: "+1-868", label: "🇹🇹 Trinidad and Tobago (+1-868)" },
  { value: "+216", label: "🇹🇳 Tunisia (+216)" },
  { value: "+90", label: "🇹🇷 Turkey (+90)" },
  { value: "+993", label: "🇹🇲 Turkmenistan (+993)" },
  { value: "+688", label: "🇹🇻 Tuvalu (+688)" },
  { value: "+256", label: "🇺🇬 Uganda (+256)" },
  { value: "+380", label: "🇺🇦 Ukraine (+380)" },
  { value: "+971", label: "🇦🇪 UAE (+971)" },
  { value: "+44", label: "🇬🇧 UK (+44)" },
  { value: "+1", label: "🇺🇸 USA (+1)" },
  { value: "+598", label: "🇺🇾 Uruguay (+598)" },
  { value: "+998", label: "🇺🇿 Uzbekistan (+998)" },
  { value: "+678", label: "🇻🇺 Vanuatu (+678)" },
  { value: "+379", label: "🇻🇦 Vatican City (+379)" },
  { value: "+58", label: "🇻🇪 Venezuela (+58)" },
  { value: "+84", label: "🇻🇳 Vietnam (+84)" },
  { value: "+967", label: "🇾🇪 Yemen (+967)" },
  { value: "+260", label: "🇿🇲 Zambia (+260)" },
  { value: "+263", label: "🇿🇼 Zimbabwe (+263)" },
];

export default function Contact() {
  const [selectedCountry, setSelectedCountry] = useState(countryOptions[0].value);
  const [mobileNumber, setMobileNumber] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countryOptions);

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setMobileNumber(value);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-50 p-6 pt-24"> {/* Adjusted padding-top */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-gray-700 text-center mb-8 max-w-md"
      >
        Get in touch for your <strong>digital visiting card</strong>. Fill out the form below, and I’ll get back to you as soon as possible.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your Email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
          <div className="flex flex-col">
            {/* Search Input for Country Codes */}
            <input
              type="text"
              placeholder="Search country code..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-2"
              onChange={(e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredOptions = countryOptions.filter((option) =>
                  option.label.toLowerCase().includes(searchTerm)
                );
                setFilteredCountries(filteredOptions);
              }}
            />
            {/* Country Code Select and Mobile Input */}
            <div className="flex">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              >
                {filteredCountries.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <input
                type="tel"
                className="w-2/3 ml-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Enter Mobile No"
                maxLength="10"
                value={mobileNumber}
                onChange={handleMobileChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}