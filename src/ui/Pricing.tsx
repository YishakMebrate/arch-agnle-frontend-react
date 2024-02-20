import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';
const features = [
  {
    name: 'Freelancer',
    description: 'The essentials to provide your best work for clients.',
    icon: CloudArrowUpIcon,
    price: '$15',
    ButtonText: 'Buy plan',
    includedFeatures: [
      '5 products',
      'Up to 1,000 subscribers',
      'Basic analytics',
      '48-hour support response time',
    ],
  },
  {
    name: 'Startup',
    description: 'A plan that scales with your rapidly growing business.',
    icon: LockClosedIcon,
    price: '$30',
    ButtonText: 'Buy plan',
    includedFeatures: [
      '25 products',
      'Up to 10,000 subscribers',
      'Advanced analytics',
      '24-hour support response time',
      'Marketing automations',
    ],
  },
  {
    name: 'Enterprise',
    description: 'Dedicated support and infrastructure for your company.',
    icon: ArrowPathIcon,
    price: 'Custom',
    ButtonText: 'Buy plan',
    includedFeatures: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      '1-hour, dedicated support response time',
      'Marketing automations',
      'Custom reporting tools',
    ],
    bgColor: 'bg-gray-900',
    txtColor: 'text-white',
  },
];

const Pricing = () => {
  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi
            velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-12">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className={feature.bgColor + ' relative border p-10 rounded-3xl'}
              >
                <h3 className={feature.txtColor + ' text-lg font-semibold leading-7 text-gray-900'}>
                  {feature.name}
                </h3>
                <p className={feature.txtColor + ' mt-6 text-sm'}>{feature.description}</p>
                <p className={feature.txtColor + ' mt-6'}>
                  <span className="text-dark font-bold text-4xl">{feature.price}</span>
                  {feature.price == 'Custom' ? null : (
                    <span className="text-sm font-semibold text-gray-500">/month</span>
                  )}
                </p>
                <a
                  href="#"
                  className="mt-6 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {feature.ButtonText}
                </a>
                <ul className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600">
                  {feature.includedFeatures.map((includedFeature) => (
                    <li key={includedFeature} className={feature.txtColor + ' flex gap-x-3'}>
                      <CheckIcon
                        className={feature.txtColor + ' h-6 w-5 flex-none text-indigo-600'}
                        aria-hidden="true"
                      />
                      {includedFeature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
