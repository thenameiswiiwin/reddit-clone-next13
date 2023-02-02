import { FacebookIcon } from '@components/icons/FacebookIcon';
import { GitHubIcon } from '@components/icons/GithubIcon';
import { TwitterIcon } from '@components/icons/TwitterIcon';

const OButtons = [
  { title: 'Facebook', icon: FacebookIcon },
  { title: 'Twitter', icon: TwitterIcon },
  { title: 'Github', icon: GitHubIcon },
];

export const OAuthButtons = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {OButtons.map((OButton) => (
        <a
          href="#"
          className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
        >
          <span className="sr-only">Sign in with {OButton.title}</span>
          {OButton.icon && <OButton.icon aria-hidden="true" />}
        </a>
      ))}
    </div>
  );
};
