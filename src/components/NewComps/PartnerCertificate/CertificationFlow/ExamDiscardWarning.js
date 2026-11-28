export default function ExamDiscardWarning({
  title,
  body,
  buttonText,
  onConfirm,
  isDiscarding,
}) {
  return (
    <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 rounded-3">
      <div className="bg-white rounded-3 p-4 d-flex flex-column gap-3 col-11 col-md-8">
        <h3 className="font-sm font-600 m-0">{title}</h3>
        <p className="font-sm font-slate-grey m-0">{body}</p>
        <button
          type="button"
          className="btn btn-primary w-100 rounded-3 py-3 d-inline-flex align-items-center justify-content-center gap-2 font-sm font-600"
          onClick={onConfirm}
          disabled={isDiscarding}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
