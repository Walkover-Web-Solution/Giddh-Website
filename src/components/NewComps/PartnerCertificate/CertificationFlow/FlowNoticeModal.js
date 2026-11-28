import { MdClose } from "react-icons/md";

export default function FlowNoticeModal({
  isOpen,
  onClose,
  title,
  body,
  titleClassName,
  primaryText,
  onPrimary,
  secondaryText,
  closeOnBackdrop,
  closeAriaLabel,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="modal fade show d-block bg-dark bg-opacity-75"
      role="dialog"
      aria-modal="true"
      onClick={closeOnBackdrop ? onClose : undefined}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-content border-0 rounded-3 p-4 p-md-5 outfit-font position-relative">
          <button
            type="button"
            className="btn border-0 bg-transparent position-absolute top-0 end-0 p-3 font-primary"
            aria-label={closeAriaLabel}
            onClick={onClose}
          >
            <MdClose size={20} />
          </button>
          <div className="d-flex flex-column align-items-center gap-3 text-center pe-4">
            {title ? (
              <h2
                className={`font-lg font-600 lh-sm m-0 ${
                  titleClassName ? titleClassName : "font-primary"
                }`}
              >
                {title}
              </h2>
            ) : null}
            {body ? (
              <p className="font-sm font-slate-grey m-0 lh-lg">{body}</p>
            ) : null}
            {primaryText ? (
              <button
                type="button"
                className="btn btn-primary rounded-1 px-4 py-3 font-sm font-600"
                onClick={onPrimary || onClose}
              >
                {primaryText}
              </button>
            ) : null}
            {secondaryText ? (
              <button
                type="button"
                className="btn btn-link p-0 font-sm font-600"
                onClick={onClose}
              >
                {secondaryText}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
