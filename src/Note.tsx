import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import { useNote } from "./NoteLayout";
import { Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type NotePropos = {
  onDelete: (id: string) => void;
};

export function Note({ onDelete }: NotePropos) {
  const note = useNote();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Row className="align-items-center mb-4">
          <Col>
            <h1>{note.title}</h1>
            {note.tags.length > 0 && (
              <Stack gap={1} direction="horizontal" className="flex-wrap">
                {note.tags.map((tag) => (
                  <Badge className="text-truncate" key={tag.id}>
                    {tag.label}
                  </Badge>
                ))}
              </Stack>
            )}
          </Col>
          <Col xs="auto">
            <Stack gap={2} direction="horizontal">
              <Link to={`/${note.id}/edit`}>
                <Button variant="primary">{t("Note.Button.edit")}</Button>
              </Link>
              <Button
                onClick={() => {
                  onDelete(note.id);
                  navigate("/");
                }}
                variant="outline-danger"
              >
                {t("Note.Button.delete")}
              </Button>
              <Link to="/">
                <Button variant="outline-secondary">
                  {t("Note.Button.back")}
                </Button>
              </Link>
            </Stack>
          </Col>
        </Row>
        <ReactMarkdown>{note.markdown}</ReactMarkdown>
      </motion.div>
    </>
  );
}
