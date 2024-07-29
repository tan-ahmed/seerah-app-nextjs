import React from "react";
import { cn } from "./SingleChapterButton";

interface StyledButtonProps {
	title: string;
	chapterImage?: string;
	slug: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	disabled?: boolean;
}

const ContinueReadingButton: React.FC<StyledButtonProps> = ({
	title,
	onClick,
	chapterImage,
	slug,
	disabled = false,
}) => {
	const chapterNumber = slug.split("chapter-")[1];
	const CHAPTER_NUMBER_TITLE =
		`Chapter ${chapterNumber} - ${title}`.toUpperCase();

	return (
		<button
			className={cn(
				"flex justify-center items-center rounded-lg min-h-20 bg-[#27576C]",
				disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
			)}
			onClick={disabled ? undefined : onClick}
			disabled={disabled}
		>
			<span className="text-white text-lg font-medium">
				{CHAPTER_NUMBER_TITLE}
			</span>
		</button>
	);
};

export default ContinueReadingButton;
