import React, { useEffect, useState } from 'react';

// Seznam zkratek států
const countries = [
    "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "YE", "YT", "ZA", "ZM", "ZW"
];

interface CountryFlagValidatorProps {
    password: string | null;
}

const CountryFlagValidator: React.FC<CountryFlagValidatorProps> = ({ password }) => {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [flagUrl, setFlagUrl] = useState<string | null>(null);
    const [isValid, setIsValid] = useState<boolean | null>(null);

    useEffect(() => {
        const randomCountry = countries[Math.floor(Math.random() * countries.length)];
        setSelectedCountry(randomCountry);
        setFlagUrl(`https://flagcdn.com/16x12/${randomCountry.toLowerCase()}.png`);
    }, []);

    useEffect(() => {
        if (password && selectedCountry) {
            const isPasswordValid = password.toUpperCase().includes(selectedCountry.toUpperCase());
            setIsValid(isPasswordValid);
        }
    }, [password, selectedCountry]);

    return (
        <div>
            <h3>Validate Password with Country Code</h3>
            {flagUrl && selectedCountry && (
                <div>
                    <img src={flagUrl} alt={`${selectedCountry} flag`} />
                    <p>Selected Country: {selectedCountry}</p>
                </div>
            )}
            <p>
                {isValid === null
                    ? "Waiting for password validation..."
                    : isValid
                        ? "Password contains the country code!"
                        : `Password does not contain the country code: ${selectedCountry}`}
            </p>
        </div>
    );
};

export default CountryFlagValidator;
