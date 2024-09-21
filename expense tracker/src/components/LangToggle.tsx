import { useTranslation } from 'react-i18next';
import cookies from 'js-cookie';
import { useEffect } from 'react';
import { Button } from './ui/button';

export function DropdownMenuRadioGroupDemo() {
  const { i18n } = useTranslation('global');

  const lng = cookies.get('i18next') || 'en';

  useEffect(() => {
    window.document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  }, [lng]);

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
      <Button
        variant={'secondary'}
        className="text-xs [&.active]:font-bold"
        onClick={() => handleChangeLang('en')}>
        English
      </Button>
      <Button
        variant={'secondary'}
        className="text-xs [&.active]:font-bold"
        onClick={() => handleChangeLang('fr')}>
        Français
      </Button>
      <Button
        variant={'secondary'}
        className="text-xs [&.active]:font-bold"
        onClick={() => handleChangeLang('ar')}>
        العربية
      </Button>
    </>
  );
}
