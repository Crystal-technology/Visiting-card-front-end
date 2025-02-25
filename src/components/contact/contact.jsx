"use client";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { useState } from "react";

// Comprehensive list of country codes
const countryOptions = [
  { value: "+93", label: "(+93) 🇦🇫 Afghanistan" },
  { value: "+355", label: "(+355) 🇦🇱 Albania" },
  { value: "+213", label: "(+213) 🇩🇿 Algeria" },
  { value: "+376", label: "(+376) 🇦🇩 Andorra" },
  { value: "+244", label: "(+244) 🇦🇴 Angola" },
  { value: "+54", label: "(+54) 🇦🇷 Argentina" },
  { value: "+374", label: "(+374) 🇦🇲 Armenia" },
  { value: "+61", label: "(+61) 🇦🇺 Australia" },
  { value: "+43", label: "(+43) 🇦🇹 Austria" },
  { value: "+994", label: "(+994) 🇦🇿 Azerbaijan" },
  { value: "+973", label: "(+973) 🇧🇭 Bahrain" },
  { value: "+880", label: "(+880) 🇧🇩 Bangladesh" },
  { value: "+375", label: "(+375) 🇧🇾 Belarus" },
  { value: "+32", label: "(+32) 🇧🇪 Belgium" },
  { value: "+501", label: "(+501) 🇧🇿 Belize" },
  { value: "+229", label: "(+229) 🇧🇯 Benin" },
  { value: "+975", label: "(+975) 🇧🇹 Bhutan" },
  { value: "+591", label: "(+591) 🇧🇴 Bolivia" },
  { value: "+387", label: "(+387) 🇧🇦 Bosnia and Herzegovina" },
  { value: "+267", label: "(+267) 🇧🇼 Botswana" },
  { value: "+55", label: "(+55) 🇧🇷 Brazil" },
  { value: "+673", label: "(+673) 🇧🇳 Brunei" },
  { value: "+359", label: "(+359) 🇧🇬 Bulgaria" },
  { value: "+226", label: "(+226) 🇧🇫 Burkina Faso" },
  { value: "+257", label: "(+257) 🇧🇮 Burundi" },
  { value: "+855", label: "(+855) 🇰🇭 Cambodia" },
  { value: "+237", label: "(+237) 🇨🇲 Cameroon" },
  { value: "+1", label: "(+1) 🇨🇦 Canada" },
  { value: "+238", label: "(+238) 🇨🇻 Cape Verde" },
  { value: "+236", label: "(+236) 🇨🇫 Central African Republic" },
  { value: "+235", label: "(+235) 🇹🇩 Chad" },
  { value: "+56", label: "(+56) 🇨🇱 Chile" },
  { value: "+86", label: "(+86) 🇨🇳 China" },
  { value: "+57", label: "(+57) 🇨🇴 Colombia" },
  { value: "+269", label: "(+269) 🇰🇲 Comoros" },
  { value: "+243", label: "(+243) 🇨🇩 Congo (DRC)" },
  { value: "+242", label: "(+242) 🇨🇬 Congo (Republic)" },
  { value: "+506", label: "(+506) 🇨🇷 Costa Rica" },
  { value: "+385", label: "(+385) 🇭🇷 Croatia" },
  { value: "+53", label: "(+53) 🇨🇺 Cuba" },
  { value: "+357", label: "(+357) 🇨🇾 Cyprus" },
  { value: "+420", label: "(+420) 🇨🇿 Czech Republic" },
  { value: "+45", label: "(+45) 🇩🇰 Denmark" },
  { value: "+253", label: "(+253) 🇩🇯 Djibouti" },
  { value: "+1-767", label: "(+1-767) 🇩🇲 Dominica" },
  { value: "+1-809", label: "(+1-809) 🇩🇴 Dominican Republic" },
  { value: "+593", label: "(+593) 🇪🇨 Ecuador" },
  { value: "+20", label: "(+20) 🇪🇬 Egypt" },
  { value: "+503", label: "(+503) 🇸🇻 El Salvador" },
  { value: "+240", label: "(+240) 🇬🇶 Equatorial Guinea" },
  { value: "+291", label: "(+291) 🇪🇷 Eritrea" },
  { value: "+372", label: "(+372) 🇪🇪 Estonia" },
  { value: "+251", label: "(+251) 🇪🇹 Ethiopia" },
  { value: "+679", label: "(+679) 🇫🇯 Fiji" },
  { value: "+358", label: "(+358) 🇫🇮 Finland" },
  { value: "+33", label: "(+33) 🇫🇷 France" },
  { value: "+241", label: "(+241) 🇬🇦 Gabon" },
  { value: "+220", label: "(+220) 🇬🇲 Gambia" },
  { value: "+995", label: "(+995) 🇬🇪 Georgia" },
  { value: "+49", label: "(+49) 🇩🇪 Germany" },
  { value: "+233", label: "(+233) 🇬🇭 Ghana" },
  { value: "+30", label: "(+30) 🇬🇷 Greece" },
  { value: "+502", label: "(+502) 🇬🇹 Guatemala" },
  { value: "+224", label: "(+224) 🇬🇳 Guinea" },
  { value: "+245", label: "(+245) 🇬🇼 Guinea-Bissau" },
  { value: "+592", label: "(+592) 🇬🇾 Guyana" },
  { value: "+509", label: "(+509) 🇭🇹 Haiti" },
  { value: "+504", label: "(+504) 🇭🇳 Honduras" },
  { value: "+36", label: "(+36) 🇭🇺 Hungary" },
  { value: "+354", label: "(+354) 🇮🇸 Iceland" },
  { value: "+91", label: "(+91) 🇮🇳 India" },
  { value: "+62", label: "(+62) 🇮🇩 Indonesia" },
  { value: "+98", label: "(+98) 🇮🇷 Iran" },
  { value: "+964", label: "(+964) 🇮🇶 Iraq" },
  { value: "+353", label: "(+353) 🇮🇪 Ireland" },
  { value: "+972", label: "(+972) 🇮🇱 Israel" },
  { value: "+39", label: "(+39) 🇮🇹 Italy" },
  { value: "+225", label: "(+225) 🇨🇮 Ivory Coast" },
  { value: "+1-876", label: "(+1-876) 🇯🇲 Jamaica" },
  { value: "+81", label: "(+81) 🇯🇵 Japan" },
  { value: "+962", label: "(+962) 🇯🇴 Jordan" },
  { value: "+7", label: "(+7) 🇰🇿 Kazakhstan" },
  { value: "+254", label: "(+254) 🇰🇪 Kenya" },
  { value: "+686", label: "(+686) 🇰🇮 Kiribati" },
  { value: "+965", label: "(+965) 🇰🇼 Kuwait" },
  { value: "+996", label: "(+996) 🇰🇬 Kyrgyzstan" },
  { value: "+856", label: "(+856) 🇱🇦 Laos" },
  { value: "+371", label: "(+371) 🇱🇻 Latvia" },
  { value: "+961", label: "(+961) 🇱🇧 Lebanon" },
  { value: "+266", label: "(+266) 🇱🇸 Lesotho" },
  { value: "+231", label: "(+231) 🇱🇷 Liberia" },
  { value: "+218", label: "(+218) 🇱🇾 Libya" },
  { value: "+423", label: "(+423) 🇱🇮 Liechtenstein" },
  { value: "+370", label: "(+370) 🇱🇹 Lithuania" },
  { value: "+352", label: "(+352) 🇱🇺 Luxembourg" },
  { value: "+261", label: "(+261) 🇲🇬 Madagascar" },
  { value: "+265", label: "(+265) 🇲🇼 Malawi" },
  { value: "+60", label: "(+60) 🇲🇾 Malaysia" },
  { value: "+960", label: "(+960) 🇲🇻 Maldives" },
  { value: "+223", label: "(+223) 🇲🇱 Mali" },
  { value: "+356", label: "(+356) 🇲🇹 Malta" },
  { value: "+692", label: "(+692) 🇲🇭 Marshall Islands" },
  { value: "+222", label: "(+222) 🇲🇷 Mauritania" },
  { value: "+230", label: "(+230) 🇲🇺 Mauritius" },
  { value: "+52", label: "(+52) 🇲🇽 Mexico" },
  { value: "+691", label: "(+691) 🇫🇲 Micronesia" },
  { value: "+373", label: "(+373) 🇲🇩 Moldova" },
  { value: "+377", label: "(+377) 🇲🇨 Monaco" },
  { value: "+976", label: "(+976) 🇲🇳 Mongolia" },
  { value: "+382", label: "(+382) 🇲🇪 Montenegro" },
  { value: "+212", label: "(+212) 🇲🇦 Morocco" },
  { value: "+258", label: "(+258) 🇲🇿 Mozambique" },
  { value: "+95", label: "(+95) 🇲🇲 Myanmar" },
  { value: "+264", label: "(+264) 🇳🇦 Namibia" },
  { value: "+674", label: "(+674) 🇳🇷 Nauru" },
  { value: "+977", label: "(+977) 🇳🇵 Nepal" },
  { value: "+31", label: "(+31) 🇳🇱 Netherlands" },
  { value: "+64", label: "(+64) 🇳🇿 New Zealand" },
  { value: "+505", label: "(+505) 🇳🇮 Nicaragua" },
  { value: "+227", label: "(+227) 🇳🇪 Niger" },
  { value: "+234", label: "(+234) 🇳🇬 Nigeria" },
  { value: "+850", label: "(+850) 🇰🇵 North Korea" },
  { value: "+47", label: "(+47) 🇳🇴 Norway" },
  { value: "+968", label: "(+968) 🇴🇲 Oman" },
  { value: "+92", label: "(+92) 🇵🇰 Pakistan" },
  { value: "+680", label: "(+680) 🇵🇼 Palau" },
  { value: "+507", label: "(+507) 🇵🇦 Panama" },
  { value: "+675", label: "(+675) 🇵🇬 Papua New Guinea" },
  { value: "+595", label: "(+595) 🇵🇾 Paraguay" },
  { value: "+51", label: "(+51) 🇵🇪 Peru" },
  { value: "+63", label: "(+63) 🇵🇭 Philippines" },
  { value: "+48", label: "(+48) 🇵🇱 Poland" },
  { value: "+351", label: "(+351) 🇵🇹 Portugal" },
  { value: "+974", label: "(+974) 🇶🇦 Qatar" },
  { value: "+40", label: "(+40) 🇷🇴 Romania" },
  { value: "+7", label: "(+7) 🇷🇺 Russia" },
  { value: "+250", label: "(+250) 🇷🇼 Rwanda" },
  { value: "+685", label: "(+685) 🇼🇸 Samoa" },
  { value: "+378", label: "(+378) 🇸🇲 San Marino" },
  { value: "+239", label: "(+239) 🇸🇹 Sao Tome and Principe" },
  { value: "+966", label: "(+966) 🇸🇦 Saudi Arabia" },
  { value: "+221", label: "(+221) 🇸🇳 Senegal" },
  { value: "+381", label: "(+381) 🇷🇸 Serbia" },
  { value: "+248", label: "(+248) 🇸🇨 Seychelles" },
  { value: "+232", label: "(+232) 🇸🇱 Sierra Leone" },
  { value: "+65", label: "(+65) 🇸🇬 Singapore" },
  { value: "+421", label: "(+421) 🇸🇰 Slovakia" },
  { value: "+386", label: "(+386) 🇸🇮 Slovenia" },
  { value: "+677", label: "(+677) 🇸🇧 Solomon Islands" },
  { value: "+252", label: "(+252) 🇸🇴 Somalia" },
  { value: "+27", label: "(+27) 🇿🇦 South Africa" },
  { value: "+82", label: "(+82) 🇰🇷 South Korea" },
  { value: "+211", label: "(+211) 🇸🇸 South Sudan" },
  { value: "+34", label: "(+34) 🇪🇸 Spain" },
  { value: "+94", label: "(+94) 🇱🇰 Sri Lanka" },
  { value: "+249", label: "(+249) 🇸🇩 Sudan" },
  { value: "+597", label: "(+597) 🇸🇷 Suriname" },
  { value: "+268", label: "(+268) 🇸🇿 Swaziland" },
  { value: "+46", label: "(+46) 🇸🇪 Sweden" },
  { value: "+41", label: "(+41) 🇨🇭 Switzerland" },
  { value: "+963", label: "(+963) 🇸🇾 Syria" },
  { value: "+886", label: "(+886) 🇹🇼 Taiwan" },
  { value: "+992", label: "(+992) 🇹🇯 Tajikistan" },
  { value: "+255", label: "(+255) 🇹🇿 Tanzania" },
  { value: "+66", label: "(+66) 🇹🇭 Thailand" },
  { value: "+228", label: "(+228) 🇹🇬 Togo" },
  { value: "+676", label: "(+676) 🇹🇴 Tonga" },
  { value: "+1-868", label: "(+1-868) 🇹🇹 Trinidad and Tobago" },
  { value: "+216", label: "(+216) 🇹🇳 Tunisia" },
  { value: "+90", label: "(+90) 🇹🇷 Turkey" },
  { value: "+993", label: "(+993) 🇹🇲 Turkmenistan" },
  { value: "+688", label: "(+688) 🇹🇻 Tuvalu" },
  { value: "+256", label: "(+256) 🇺🇬 Uganda" },
  { value: "+380", label: "(+380) 🇺🇦 Ukraine" },
  { value: "+971", label: "(+971) 🇦🇪 UAE" },
  { value: "+44", label: "(+44) 🇬🇧 UK" },
  { value: "+1", label: "(+1) 🇺🇸 USA" },
  { value: "+598", label: "(+598) 🇺🇾 Uruguay" },
  { value: "+998", label: "(+998) 🇺🇿 Uzbekistan" },
  { value: "+678", label: "(+678) 🇻🇺 Vanuatu" },
  { value: "+379", label: "(+379) 🇻🇦 Vatican City" },
  { value: "+58", label: "(+58) 🇻🇪 Venezuela" },
  { value: "+84", label: "(+84) 🇻🇳 Vietnam" },
  { value: "+967", label: "(+967) 🇾🇪 Yemen" },
  { value: "+260", label: "(+260) 🇿🇲 Zambia" },
  { value: "+263", label: "(+263) 🇿🇼 Zimbabwe" }
  ]

  export default function Contact() {
    const initialData = { name: "", email: "", phone: "", description: "" };
    const [selectedCountry, setSelectedCountry] = useState(countryOptions[0].value);
    const [mobileNumber, setMobileNumber] = useState("");
    const [filteredCountries, setFilteredCountries] = useState(countryOptions);
    const [formData, setFormData] = useState(initialData);
  
    // Handle input changes
    const handleChange = (event) => {
      setFormData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value,
      }));
    };
  
    // Handle mobile number input
    const handleMobileChange = (e) => {
      const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
      setMobileNumber(value);
    };
  
    // Handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault(); // Prevent page reload
  
      // Concatenate country code with mobile number
      const fullPhoneNumber = `${selectedCountry} ${mobileNumber}`;
  
      try {
        const response = await fetch("http://localhost:8080/api/contact/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, phone: fullPhoneNumber }), // Send full number
        });
  
        if (!response.ok) {
          throw new Error("Failed to send message");
        }
  
        const data = await response.json();
        console.log("Response:", data);
        alert("Message sent successfully!");
  
        // Reset form after submission
        setFormData(initialData);
        setMobileNumber(""); // Clear mobile input separately
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send message. Please try again.");
      }
    };
  
    return (
      <div className="flex flex-col justify-center items-center bg-gray-50 p-6 pt-24">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl font-bold text-gray-900 mb-6">
          Contact Me
        </motion.h1>
  
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-gray-700 text-center mb-8 max-w-md">
          Get in touch for your <strong>digital visiting card</strong>. Fill out the form below, and I’ll get back to you as soon as possible.
        </motion.p>
  
        {/* Contact Form */}
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Your Name" />
          </div>
  
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Your Email" />
          </div>
  
          {/* Mobile Number Section */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
            <div className="flex flex-col">
              {/* Search Input for Country Codes */}
              <input type="text" placeholder="Search country code..." className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-2"
                onChange={(e) => {
                  const searchTerm = e.target.value.toLowerCase();
                  const filteredOptions = countryOptions.filter((option) => option.label.toLowerCase().includes(searchTerm));
                  setFilteredCountries(filteredOptions);
                }}
              />
  
              {/* Country Code Select and Mobile Input */}
              <div className="flex">
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
                  {filteredCountries.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
  
                <input type="tel" className="w-2/3 ml-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Enter Mobile No" maxLength="10" value={mobileNumber} onChange={handleMobileChange} />
              </div>
            </div>
          </div>
  
          {/* Message Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea name="description" value={formData.description} onChange={handleChange} className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" placeholder="Your Message" rows="4"></textarea>
          </div>
  
          {/* Submit Button */}
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </motion.button>
        </motion.form>
      </div>
    );
  }
  