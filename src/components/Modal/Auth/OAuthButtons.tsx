import { Button } from '@components/Button';
import { FacebookIcon } from '@components/icons/FacebookIcon';
import { GitHubIcon } from '@components/icons/GithubIcon';
import { TwitterIcon } from '@components/icons/TwitterIcon';

const OButtons = [
  { title: 'Facebook', icon: FacebookIcon, label: 'Sign in with Facebook' },
  { title: 'Twitter', icon: TwitterIcon, label: 'Sign in with Twitter' },
  { title: 'Github', icon: GitHubIcon, label: 'Sign in with Github' },
];

export const OAuthButtons = () => {
  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      {OButtons.map((OButton) => (
        <Button
          key={OButton.title}
          variant="oAuth"
          size="tertiary"
          role="button"
          aria-label={OButton.label}
        >
          <span className="sr-only">Sign in with {OButton.title}</span>
          {OButton.icon && <OButton.icon aria-hidden="true" />}
        </Button>
      ))}
    </div>
  );
};
