const payments = [
  {
    name: "Visa",
    src: "https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg",
    alt: "Visa payment logo",
  },
  {
    name: "Mastercard",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
    alt: "Mastercard payment logo",
  },
  {
    name: "bKash",
    src: "https://logos-world.net/wp-content/uploads/2024/10/Bkash-Logo.jpg",
    alt: "bKash payment logo",
  },
  {
    name: "Nagad",
    src: "https://www.logo.wine/a/logo/Nagad/Nagad-Horizontal-Logo.wine.svg",
    alt: "Nagad payment logo",
  },
  {
    name: "Rocket",
    src: "https://w3soft.com.bd/public/payment/rocket.svg",
    alt: "Rocket payment logo",
  },
  {
    name: "Upay",
    src: "https://i.pinimg.com/736x/9a/52/75/9a5275c7f4f013c8768c19d221ded66b.jpg",
    alt: "Upay payment logo",
  },
];

export default function PaymentMethods() {
  return (
    <section className="py-4 md:py-5 bg-linear-to-r from-indigo-50 to-purple-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
            We Accept
          </h3>
          <p className="mt-3 text-sm md:text-base text-gray-600">
            Safe & convenient payment options for your shopping
          </p>
        </div>

        <div className="md:mt-8 mt-6 flex flex-wrap justify-center items-center gap-6 md:gap-14">
          {payments.map((item) => (
            <div
              key={item.name}
              className="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
              title={item.name}
            >
              <img
                src={item.src}
                alt={`${item.name} logo`}
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="md:mt-10 mt-8 text-center text-sm text-gray-500 flex items-center justify-center gap-0.5 md:gap-2">
          <svg
            className="w-5 h-5 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
          Secured with 256-bit SSL encryption
        </div>
      </div>
    </section>
  );
}
