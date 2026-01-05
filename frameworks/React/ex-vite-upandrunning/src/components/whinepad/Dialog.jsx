import { useEffect } from 'react';
import { Button } from './Button';
import './Dialog.css';

/**
 * @param {*} props
 * ```
 * {
 *  header: "",            // header
 *  modal: false,          // whether modal
 *  extendedDismiss: true, //
 *  confirmLabel: "",
 *  onAction: () => {},    // 'confirm`, `dismiss`
 *  hasCancel: true        // whether has cancel button
 * }
 * ```
 * @returns Dialog component.
 */
export function Dialog(props) {
  const {
    header,
    modal = false,
    extendedDismiss = true,
    confirmLabel = 'ok',
    onAction = () => { },
    hasCancel = true,
  } = props;

  useEffect(() => {
    function dismissClick(e) {
      if (e.target.classList.contains('DialogModal')) {
        onAction('dismiss');
      }
    }

    function dismissKey(e) {
      if (e.key === 'Escape') {
        onAction('dismiss');
      }
    }
    if (modal) {
      document.body.classList.add('DialogModalOpen');
      if (extendedDismiss) {
        document.body.addEventListener('click', dismissClick);
        document.addEventListener('keydown', dismissKey);
      }
    }

    return () => {
      document.body.classList.remove('DialogModalOpen');
      document.body.removeEventListener('click', dismissClick);
      document.removeEventListener('keydown', dismissKey);
    };
  }, [onAction, modal, extendedDismiss]);

  return (
    <div className={modal ? 'Dialog DialogModal' : 'Dialog'}>
      {/* wrapper */}
      <div className={modal ? 'DialogModalWrap' : null}>
        {/* header */}
        <div className="DialogHeader">{header}</div>
        {/* children */}
        <div className="DialogBody">{props.children}</div>
        {/* footer */}
        <div className="DialogFooter">
          {hasCancel ? (
            <Button
              className="DialogDismiss"
              onClick={() => onAction('dismiss')}>
              Cancel
            </Button>
          ) : null}
          <Button onClick={() => onAction(hasCancel ? 'confirm' : 'dismiss')}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}