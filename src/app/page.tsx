import { AppConfig } from '@lib/AppConfig';

export default function Homepage() {
  return (
    <div>
      <header>{AppConfig.header}</header>
      <main>{AppConfig.main}</main>
      <footer>{AppConfig.footer}</footer>
    </div>
  );
}
