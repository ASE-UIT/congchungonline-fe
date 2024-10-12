import React from 'react';
import { List, IconButton, Box, Typography } from '@mui/material';
import {
  Cancel,
  CheckCircle,
  PictureAsPdfRounded as PdfIcon,
  ArticleRounded as DocIcon,
  PhotoRounded as ImageIcon,
} from '@mui/icons-material';
import { black, blue, green, red, white, yellow } from '../../config/theme/themePrimitives';

const UploadedFileList = ({ files, onRemove }) => {
  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    switch (extension) {
      case 'pdf':
        return (
          <IconButton sx={{ p: 0.5, backgroundColor: red[50] }}>
            <PdfIcon sx={{ color: red[500], fontSize: 18 }} />
          </IconButton>
        );
      case 'docx':
        return (
          <IconButton sx={{ p: 0.5, backgroundColor: blue[50] }}>
            <DocIcon sx={{ color: blue[500], fontSize: 18 }} />
          </IconButton>
        );
      case 'png':
      case 'jpg':
        return (
          <IconButton sx={{ p: 0.5, backgroundColor: yellow[50] }}>
            <ImageIcon sx={{ color: yellow[500], fontSize: 18 }} />
          </IconButton>
        );
      default:
        return null;
    }
  };

  const renderFileSize = (size) => {
    if (size < 1024) {
      return `${size} B`;
    }
    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(2)} KB`;
    }
    if (size < 1024 * 1024 * 1024) {
      return `${(size / (1024 * 1024)).toFixed(2)} MB`;
    }
    return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  };

  return (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '70%' }}>
      {files.map((file, index) => (
        <Box
          key={index}
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            backgroundColor: white[50],
            p: 1,
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          {getFileIcon(file.name)}

          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 'fit-content',
                width: '100%',
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {file.name}
              </Typography>
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <IconButton onClick={() => onRemove(file)} sx={{ p: 0 }}>
                  <Cancel sx={{ color: black[300], fontSize: 18 }} />
                </IconButton>
                <IconButton sx={{ p: 0 }} disabled>
                  <CheckCircle sx={{ color: green[500], fontSize: 18 }} />
                </IconButton>
              </Box>
            </Box>
            {/* <LinearProgress
              variant="determinate"
              value={file.progress}
              sx={{
                width: '100%',
                borderRadius: 1,
                my: 0.5,
                backgroundColor: gray[300],
                '& .MuiLinearProgress-bar': {
                  backgroundColor: file.progress < 100 ? gray[500] : file.status === 'error' ? red[500] : green[500],
                },
              }}
            /> */}
            <Box sx={{ display: 'flex' }}>
              <Typography flex={1} variant="caption">
                {renderFileSize(file.size)}
              </Typography>
              {/* <Typography variant="caption">{file.progress}%</Typography> */}
            </Box>
          </Box>
        </Box>
      ))}
    </List>
  );
};

export default UploadedFileList;
